import React from "react";
import "./campus.css";

import LinkButton from "../utilities/LinkButton";

const AddCampusView = props => {
  const { name, email, campusId, imageUrl, handleSubmit, handleChange } = props;

  return (
    <>
      <div>
        <h1>Add Campus</h1>
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
            Name:
            <input
              class="box"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            Email:
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
            Image URL:
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
            Campus ID:
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
            <input type="submit"></input>
          </div>
        </form>
      </div>
      <LinkButton class="button" to="/campuses">
        All Campuses
      </LinkButton>
    </>
  );
};

export default AddCampusView;
