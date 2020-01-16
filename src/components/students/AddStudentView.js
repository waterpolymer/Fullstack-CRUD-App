import React from "react";
import "./student.css";

import LinkButton from "../utilities/LinkButton";

const AddStudentView = props => {
	const {
		firstName,
		lastName,
		email,
		gpa,
		imageUrl,
		campusId,
		handleSubmit,
		handleChange
	} = props;

	return (
		<div>
			<div>
				<h1>Add Student</h1>
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
					<div>
						Campus ID:
						<input
							className="box"
							name="campusId"
							type="text"
							value={campusId}
							onChange={handleChange}
						/>
					</div>
					<div>
						<input className="box" type="submit" value="Submit" id="submit" />
					</div>
				</form>
			</div>

			<LinkButton className="button" to={"/students/"}>
				Return to student
			</LinkButton>
		</div>
	);
};

export default AddStudentView;
