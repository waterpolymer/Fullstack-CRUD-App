import React, { Component } from "react";
import { connect } from "react-redux";
import "./campus.css";

import LinkButton from "../utilities/LinkButton";
import CampusCard from "./CampusCard";

import { getCampusesThunk } from "../../actions";

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
				<LinkButton to="/campuses/add-campus">Add Campus</LinkButton>
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
