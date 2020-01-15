import React, { Component } from "react";
import { connect } from "react-redux";

import AddCampusView from "./AddCampusView";

import { addCampus } from "../../actions";

class AddCampus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 20,
			name: "Hunter",
			email: "Hunter@test.com",
			imageUrl: "https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg",
			campusId: "20"
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

export default connect(mapState, mapDispatch)(AddCampus);