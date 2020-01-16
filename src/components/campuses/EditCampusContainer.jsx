import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import EditCampusView from "./EditCampusView";

import { editCampusThunk, getCampusThunk } from "../../actions";

class EditCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			location: "",
			imageUrl:
				"https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg"
		};
	}

	componentDidMount() {
		//Error check if user attmepts to edit non existant campus
		if (this.props.currCampus !== undefined) {
			this.setState({
				name: this.props.currCampus.name,
				email: this.props.currCampus.email,
				location: this.props.currCampus.location,
				imageUrl: this.props.currCampus.imageUrl
			});
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let campus = {
			name: this.state.name,
			email: this.state.email,
			location: this.state.location,
			imageUrl: this.state.imageUrl
		};
		console.log(this.props);
		this.props.editCampus(campus, this.props.currCampus.id);
		this.props.history.push(".");
	};

	render() {
		//PLEASE STYLE ME
		if (this.props.currCampus === undefined) {
			return <div>This campus does not exist</div>;
		}

		return (
			<div>
				<EditCampusView
					name={this.state.name}
					email={this.state.email}
					location={this.state.location}
					imageUrl={this.state.imageUrl}
					id={this.props.currCampus.id}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		campusId: parseInt(window.location.pathname.split("/")[2]),
		currCampus: state.campus.currCampus
	};
};

const mapDispatch = dispatch => {
	return {
		editCampus: (campus, campusId) =>
			dispatch(editCampusThunk(campus, campusId)),
		getCampus: id => dispatch(getCampusThunk(id))
	};
};

export default connect(mapState, mapDispatch)(withRouter(EditCampus));
