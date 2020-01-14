import React from "react";
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
				<p>{`Name: ${campus.name}`}</p>
				<p>{`Campus id: ${campus.campusId}`}</p>
			</div>
		</div>
	);
};

export default CampusCard;
