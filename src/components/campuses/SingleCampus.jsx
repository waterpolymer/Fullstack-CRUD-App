import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./campus.css";

import StudentCard from "../students/StudentCard";
import LinkButton from "../utilities/LinkButton";

import { getCampusThunk, removeCampusThunk } from "../../actions";

class SingleCampus extends Component {
	constructor(props) {
		super(props);
		props.getCampus(props.campusId);
	}

	render() {
		let campusInfo = null;
		if (this.props.currCampus) {
			const campus = this.props.currCampus;
			const students = campus.students;
			const studentCards = students.map((student, index) => (
				<StudentCard key={index} student={student} />
			));
			campusInfo = (
				<div>
					<div>
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
					<div>
						<img src={campus.imageUrl} width="400" alt="" />
						<h3>{campus.name}</h3>
						Email: {campus.email}
					</div>
					<div>
						<h2>Students</h2>
						<div className="student-card-container" style={{ margin: 0 }}>
							{studentCards}
						</div>
					</div>
				</div>
			);
		}
		return <div>{campusInfo}</div>;
	}
}

const mapStateToProps = state => ({
	campusId: parseInt(window.location.pathname.split("/")[2]),
	currCampus: state.campus.currCampus
});

const mapDispatchToProps = dispatch => ({
	getCampus: id => dispatch(getCampusThunk(id)),
	removeCampus: campus => dispatch(removeCampusThunk(campus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
