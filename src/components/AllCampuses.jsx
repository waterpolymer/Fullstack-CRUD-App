import React, { Component } from "react";
import LinkButton from "./LinkButton";
import CampusCard from "./CampusCard";
import { connect } from "react-redux";
import { addCampus, removeCampus, fetchCampusesThunk } from "../thunks";

//Dummy data
let dummyCampus = {
	id: 3,
	name: "campus3",
	email: "campus3@yahoo.com",
	imageUrl:
		"https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg",
	campusId: 3
};

class AllCampuses extends Component {
	componentDidMount() {
		this.props.fetchAllCampuses();
	}

	// https://stackoverflow.com/questions/32802202/how-to-center-a-flex-container-but-left-align-flex-items
	// cant word-wrap with items left-justified
	render() {
		const { allCampuses, addCampus, removeCampus } = this.props;

		console.log("allcampuses", allCampuses);
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
				<button type="button" onClick={() => addCampus(dummyCampus)}>
					Add Campus
				</button>
				<button type="button" onClick={() => removeCampus(dummyCampus.id)}>
					Remove Campus
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	allCampuses: state.campusReducer.allCampuses
});

const mapDispatchToProps = dispatch => ({
	fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
	addCampus: campuses => dispatch(addCampus(campuses)),
	removeCampus: campuses => dispatch(removeCampus(campuses))
});

// export default AllCampuses;
export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
