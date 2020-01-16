import React from "react";
import { Link } from "react-router-dom";
import "./campus.css";

const CampusCard = props => {
	const campus = props.campus;
	return (
		<div className="campus-card">
			<div className="campus-picture-container">
				<img
					alt="campus"
					src={campus.imageUrl}
					className="campus-picture"
				></img>
			</div>
			<div className="campus-info">
				<Link to={"/campuses/" + campus.id}>{`Name: ${campus.name}`}</Link>
				<p>{`Campus id: ${campus.id}`}</p>
			</div>
		</div>
	);
};

export default CampusCard;
