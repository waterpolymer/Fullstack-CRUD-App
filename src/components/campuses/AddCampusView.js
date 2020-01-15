import React from "react";
import "./campus.css";

import LinkButton from "../utilities/LinkButton";

const AddCampusView = props => {
	const {
		name,
		email,
		campusId,
		imageUrl,
		handleSubmit,
		handleChange
	} = props;

	return (
		<div>
			<h1>Add campus</h1>
			<LinkButton to="/"> Home </LinkButton>
			<div
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<div>
					name:
					<input
						name="name"
						type="text"
						value={name}
						onChange={handleChange}
					/>
				</div>
				<div>
					email:
					<input
						name="email"
						type="email"
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div>
					image url:
					<input
						name="imageUrl"
						type="text"
						value={imageUrl}
						onChange={handleChange}
					/>
				</div>
				<div>
					campus Id:
					<input
						name="campusId"
						type="text"
						value={campusId}
						onChange={handleChange}
					/>
				</div>
				<div>
					<LinkButton to="/campuses" onClick={handleSubmit}>
						Submit
					</LinkButton>
				</div>
			</div>
			<LinkButton to="/campuses">All Campuses</LinkButton>
		</div>
	);
};

export default AddCampusView;
