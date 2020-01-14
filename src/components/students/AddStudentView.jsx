import React from "react";

import LinkButton from "../utilities/LinkButton";

const AddStudentView = props => {
	const {
		firstName,
		lastName,
		email,
		gpa,
		campusId,
		handleSubmit,
		handleChange
	} = props;

	return (
		<div>
			<h1>Add Student</h1>
			<LinkButton to="/"> Home </LinkButton>
			<div
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<div>
					first name:
					<input
						name="firstName"
						type="text"
						value={firstName}
						onChange={handleChange}
					/>
				</div>
				<div>
					last name:
					<input
						name="lastName"
						type="text"
						value={lastName}
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
						value="https://i.stack.imgur.com/l60Hf.png"
						onChange={handleChange}
					/>
				</div>
				<div>
					gpa:
					<input name="gpa" type="text" value={gpa} onChange={handleChange} />
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
					<LinkButton to="/students" onClick={handleSubmit}>
						Submit
					</LinkButton>
				</div>
			</div>
			<LinkButton to="/students">All Students</LinkButton>
		</div>
	);
};

export default AddStudentView;
