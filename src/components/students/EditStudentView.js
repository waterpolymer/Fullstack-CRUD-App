import React from "react";

import LinkButton from "../utilities/LinkButton";
import "./student.css";

const EditStudentView = props => {
	const {
		id,
		firstName,
		lastName,
		email,
		gpa,
		imageUrl,
		initialCampusId,
		campusNameIdArr,
		handleSubmit,
		handleChange
	} = props;

	const dropdownOptions = campusNameIdArr.map((campus, index) => {
		return (
			<option key={index} value={campus.id}>
				{campus.name}
			</option>
		);
	});

	return (
		<>
			<div>
				<h1>Edit Student</h1>
			</div>
			<div className="input">
				<form
					style={{
						display: "flex",
						flexDirection: "column"
					}}
					onSubmit={handleSubmit}
				>
					<div>
						First name:
						<input
							className="box"
							name="firstName"
							type="text"
							value={firstName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						Last name:
						<input
							className="box"
							name="lastName"
							type="text"
							value={lastName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						Email:
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
						Image URL:
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
						GPA:
						<input
							className="box"
							name="gpa"
							type="text"
							value={gpa}
							onChange={handleChange}
							required
						/>
					</div>
					<select
						defaultValue={initialCampusId}
						name="campusId"
						onChange={handleChange}
						required
					>
						<option key={-1} value=""></option>
						{dropdownOptions}
					</select>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<input className="box" type="submit" value="Submit" id="submit" />
					</div>
				</form>
				<LinkButton className="button" to={`/students/${id}`}>
					Return to student
				</LinkButton>
			</div>

			{/* <LinkButton className="button">Cancel</LinkButton> */}
		</>
	);
};

export default EditStudentView;
