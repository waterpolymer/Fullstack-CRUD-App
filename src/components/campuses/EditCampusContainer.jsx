import React, { Component } from "react";
import { connect } from "react-redux";

import EditCampusView from "./EditCampusView";

import { editCampus, getCampusThunk } from "../../actions";

class EditCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			name: "",
			email: "",
			imageUrl: "https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg",
			campusId: ""
		};
	}

	componentDidMount() {
		this.setState({
			id: this.props.currCampus.id,
			name: this.props.currCampus.name,
			email: this.props.currCampus.email,
			imageUrl: this.props.currCampus.imageUrl,
			gpa: this.props.currCampus.gpa,
			campusId: this.props.currCampus.campusId
		});
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let campus = {
			id: this.state.id,
			name: this.state.name,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			campusId: this.state.campusId
		};

		this.props.editCampus(campus, this.state.id);
	};

	render() {
		return (
			<div>
				<EditCampusView
					id={this.props.campusId}
					name={this.state.name}
					campusName={this.state.campusName}
					email={this.state.email}
					imageUrl={this.state.imageUrl}
					campusId={this.state.campusId}
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
			dispatch(editCampus(campus, campusId)),
		getCampus: id => dispatch(getCampusThunk(id))
	};
};

export default connect(mapState, mapDispatch)(EditCampus);
