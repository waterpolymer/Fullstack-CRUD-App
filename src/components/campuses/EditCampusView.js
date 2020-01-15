import React from "react";

import LinkButton from "../utilities/LinkButton";

const EditCampusView = props => {
	const {
		id,
		name,
        email,
        imageUrl,
		campusId,
		handleSubmit,
		handleChange
	} = props;

	return (
		<div>
			<h1>Edit Campus</h1>
			<LinkButton to="/"> Home </LinkButton>
			<form
				style={{
					display: "flex",
					flexDirection: "column"
				}}
				onSubmit={handleSubmit}
			>
				<div>
					{" "}
					name:
					<input
						name="name"
						type="text"
						value={name}
						onChange={handleChange}
					/>{" "}
				</div>
				<div>
					{" "}
					email:{" "}
					<input
						name="email"
						type="email"
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div>
					{" "}
					image url:{" "}
					<input
						name="imageUrl"
						type="text"
						value={imageUrl}
						onChange={handleChange}
					/>
				</div>
				<div>
					{" "}
					campus Id:{" "}
					<input
						name="campusId"
						type="text"
						value={campusId}
						onChange={handleChange}
					/>
				</div>
				<div>
					{" "}
					<input type="submit" value="submit" />
				</div>
			</form>
			<LinkButton to={`/campuses/${id}`}> Return to campuses </LinkButton>
		</div>
	);
};

export default EditCampusView;