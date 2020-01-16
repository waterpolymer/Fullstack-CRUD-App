import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./student.css";

import LinkButton from "../utilities/LinkButton";

import { getStudentThunk, removeStudent } from "../../actions";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
    props.getStudent(this.props.studentId);
  }

  render() {
    let studentInfo = null;
    if (this.props.currStudent) {
      const student = this.props.currStudent;
      studentInfo = (
        <div>
          <div>
            <img src={student.imageUrl} width="400" alt="" />
            <h3>
              {student.firstName} {student.LastName}
            </h3>
            Email: {student.email} <br />
            GPA: {student.gpa} <br />
            Campus: {student.campusId}
          </div>
          <Link
            class="button"
            to="/students"
            onClick={() => this.props.removeStudent(student.id)}
          >
            Remove Student
          </Link>
          <LinkButton class="button" to="/students">
            All Students
          </LinkButton>
          <LinkButton
            class="button"
            to={`/students/${student.id}/edit-student`}
          >
            Edit Student
          </LinkButton>
        </div>
      );
    }
    return <div>{studentInfo}</div>;
  }
}

const mapStateToProps = state => ({
  studentId: parseInt(window.location.pathname.split("/")[2]),
  currStudent: state.student.currStudent
});

const mapDispatchToProps = dispatch => ({
  getStudent: id => dispatch(getStudentThunk(id)),
  removeStudent: student => dispatch(removeStudent(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
