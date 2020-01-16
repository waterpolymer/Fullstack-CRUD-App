import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddCampusView from "./AddCampusView";

import { addCampusThunk } from "../../actions";

//MUST GENERATE CAMPUS ID SOMEHOW

class AddCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			location: "",
			imageUrl:
				"https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg"
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
			name: this.state.name,
			email: this.state.email,
			location: this.state.location,
			imageUrl: this.state.imageUrl
		};
		this.props.addCampus(campus);
		this.props.history.push(".");
	};

	render() {
		return (
			<div>
				<AddCampusView
					name={this.state.name}
					email={this.state.email}
					location={this.state.location}
					imageUrl={this.state.imageUrl}
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
		addCampus: campus => dispatch(addCampusThunk(campus))
	};
};

export default connect(mapState, mapDispatch)(withRouter(AddCampus));
