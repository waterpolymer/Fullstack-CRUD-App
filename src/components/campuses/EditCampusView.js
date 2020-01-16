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
		<>
			<div>
				<h1>Edit Campus</h1>
				<div />
				<div className="input">
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
								className="box"
								name="name"
								type="text"
								value={name}
								onChange={handleChange}
								required
							/>{" "}
						</div>
						<div>
							{" "}
							email:{" "}
							<input
								className="box"
								name="email"
								type="email"
								value={email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							{" "}
							image url:{" "}
							<input
								className="box"
								name="imageUrl"
								type="text"
								value={imageUrl}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							{" "}
							campus Id:{" "}
							<input
								className="box"
								name="campusId"
								type="text"
								value={campusId}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							{" "}
							<input type="submit" value="Submit" id="submit" />
						</div>
					</form>
				</div>
			</div>
			<LinkButton className="button" to={`/campuses/${id}`}>
				{" "}
				Return to Campuses{" "}
			</LinkButton>
		</>
	);
};

export default EditCampusView;
