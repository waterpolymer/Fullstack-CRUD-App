import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./campus.css";

import SingleCampusStudentCard from "./SingleCampusStudentCard";
import LinkButton from "../utilities/LinkButton";

import { getCampusThunk, removeCampusThunk } from "../../actions";

class SingleCampus extends Component {
	constructor(props) {
		super(props);
		props.getCampus(props.campusId);

		// const currCampus = props.allCampuses.filter(
		// 	campus => campus.id === props.campusId
		// )[0];
		// this.state = {
		// 	campus: currCampus
		// };
		// console.log(props.currCampus, currCampus);
	}

	render() {
		let campusInfo = null;
		if (this.props.currCampus) {
			const campus = this.props.currCampus;
			campusInfo = (
				<div>
					<div>
						<img src={campus.imageUrl} width="400" alt="" />
						<h3>{campus.name}</h3>
						Email: {campus.email} <br />
						Campus: {campus.id}
					</div>
					<Link
						className="button"
						to="/campuses"
						onClick={() => this.props.removeCampus(campus.id)}
					>
						Remove Campus
					</Link>
					<LinkButton className="button" to="/campuses">
						All Campuses
					</LinkButton>
					<LinkButton
						className="button"
						to={`/campuses/${campus.id}/edit-campus`}
					>
						Edit Campus
					</LinkButton>
				</div>
			);
		}
		return <div>{campusInfo}</div>;
	}
}

const mapStateToProps = state => ({
	campusId: parseInt(window.location.pathname.split("/")[2]),
	allCampuses: state.campus.allCampuses,
	currCampus: state.campus.currCampus
});

const mapDispatchToProps = dispatch => ({
	getCampus: id => dispatch(getCampusThunk(id)),
	removeCampus: campus => dispatch(removeCampusThunk(campus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
