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
              name:
              <input
                class="box"
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
                class="box"
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
                class="box"
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
                class="box"
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
        </div>
      </div>
      <LinkButton class="button" to={`/campuses/${id}`}>
        {" "}
        Return to Campuses{" "}
      </LinkButton>
    </>
  );
};

export default EditCampusView;
