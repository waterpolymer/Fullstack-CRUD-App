import React, { Component } from "react";
import { connect } from "react-redux";
import "./campus.css";

import LinkButton from "../utilities/LinkButton";
import CampusCard from "./CampusCard";

import { getCampusesThunk } from "../../actions";

class AllCampuses extends Component {
	constructor(props) {
		super(props);
		props.getAllCampuses();
	}

	render() {
		const { allCampuses } = this.props;
		let campusesCards = null;

		if (allCampuses !== undefined && allCampuses.length === 0) {
			campusesCards = (
				<div className="notFound"> No campuses currently listed! </div>
			);
		} else if (allCampuses) {
			campusesCards = allCampuses.map((campus, index) => (
				<CampusCard key={index} campus={campus} />
			));
		}

		return (
			<div className="all-campuses-container">
				<h1>All Campuses</h1>
				<div className="campus-card-container">{campusesCards}</div>
				<LinkButton className="button" to="/campuses/add-campus">
					Add Campus
				</LinkButton>
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
