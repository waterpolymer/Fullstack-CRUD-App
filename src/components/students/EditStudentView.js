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
    campusId,
    handleSubmit,
    handleChange
  } = props;

  return (
    <>
      <div>
        <h1>Edit Student</h1>
      </div>
      <div class="input">
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          onSubmit={handleSubmit}
        >
          <div>
            {" "}
            First name:
            <input
              class="box"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div>
            {" "}
            Last name:{" "}
            <input
              class="box"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div>
            {" "}
            Email:{" "}
            <input
              class="box"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {" "}
            Image URL:{" "}
            <input
              class="box"
              name="imageUrl"
              type="text"
              value={imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {" "}
            GPA:{" "}
            <input
              class="box"
              name="gpa"
              type="text"
              value={gpa}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {" "}
            Campus ID:{" "}
            <input
              class="box"
              name="campusId"
              type="text"
              value={campusId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            {" "}
            <input class="box" type="submit" value="submit" />
          </div>
        </form>
      </div>

      <LinkButton class="button" to={`/students/${id}`}>
        {" "}
        Return to student{" "}
      </LinkButton>
    </>
  );
};

export default EditStudentView;
