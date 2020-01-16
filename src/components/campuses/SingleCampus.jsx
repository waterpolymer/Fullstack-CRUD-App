import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./campus.css";

import LinkButton from "../utilities/LinkButton";

import { getCampusThunk, removeCampus } from "../../actions";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
    props.getCampus(this.props.campusId);
  }

  render() {
    let campusInfo = null;
    if (this.props.currCampus) {
      const campus = this.props.currCampus;
      campusInfo = (
        <div>
          <div>
            <img src={campus.imageUrl} width="400" alt="" />
            <h3>{campus.name}</h3>
            Email: {campus.email} <br />
            Campus: {campus.campusId}
          </div>
          <Link
            class="button"
            to="/campuses"
            onClick={() => this.props.removeCampus(campus.id)}
          >
            Remove Campus
          </Link>
          <LinkButton class="button" to="/campuses">
            All Campuses
          </LinkButton>
          <LinkButton class="button" to={`/campuses/${campus.id}/edit-campus`}>
            Edit Campus
          </LinkButton>
        </div>
      );
    }
    return <div>{campusInfo}</div>;
  }
}

const mapStateToProps = state => ({
  campusId: parseInt(window.location.pathname.split("/")[2]),
  currCampus: state.campus.currCampus
});

const mapDispatchToProps = dispatch => ({
  getCampus: id => dispatch(getCampusThunk(id)),
  removeCampus: campus => dispatch(removeCampus(campus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
