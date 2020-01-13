import React from "react";

const CampusCard = props => {
	const campus = props.campus;
	return (
		<div className="campus-card">
			<div className="profile-picture-container">
				<img alt="pfp" src={campus.imageUrl} className="profile-picture"></img>
			</div>
			<div className="campus-info">
				<p>{`Name: ${campus.name}`}</p>
				<p>{`Campus id: ${campus.campusId}`}</p>
			</div>
		</div>
	);
};

export default CampusCard;
