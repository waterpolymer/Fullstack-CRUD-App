import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddCampusView from "./AddCampusView";

import { addCampus } from "../../actions";

//MUST GENERATE CAMPUS ID SOMEHOW

class AddCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 20,
			name: "",
			email: "",
			imageUrl: "",
			campusId: "",
		};
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
		this.props.addCampus(campus);
		console.log(this.props.allCampuses);
		this.props.history.push('.')
	};

	render() {
		return (
			<div>
				<AddCampusView
					name={this.state.name}
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
		allCampuses: state.campus.allCampuses
	};
};

const mapDispatch = dispatch => {
	return {
		addCampus: campus => dispatch(addCampus(campus))
	};
};

export default connect(mapState, mapDispatch)(withRouter(AddCampus));