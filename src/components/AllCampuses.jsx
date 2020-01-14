import React, { Component } from "react";
import LinkButton from "./LinkButton";
import CampusCard from "./CampusCard";
import { connect } from "react-redux";
import { getCampusesThunk } from "../thunks";

class AllCampuses extends Component {
	componentDidMount() {
		this.props.getAllCampuses();
	}

	render() {
		const { allCampuses } = this.props;
		let campusesCards = null;
		if (allCampuses) {
			campusesCards = allCampuses.map(campus => (
				<CampusCard key={campus.id} campus={campus} />
			));
		}

		return (
			<div className="all-campuses-container">
				<h1>All Campuses</h1>
				<LinkButton to="/">Home</LinkButton>
				<div className="campus-card-container">{campusesCards}</div>
				<button type="button">Add Campus</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	allCampuses: state.campus.allCampuses
});

const mapDispatchToProps = dispatch => ({
	getAllCampuses: () => dispatch(getCampusesThunk())
});

// export default AllCampuses;
export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
