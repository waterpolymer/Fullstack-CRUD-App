import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addStudent } from "./store/utilities/student";

//Dummy data
let student1 = {
  id: 2,
  firstName: "bob",
  lastName: "jones",
  email: "bobbyboy1234@yahoo.com",
  gpa: 3.7,
  campusId: 1
};

class App extends Component {
  addStudent = student => {
    this.props.addStudent(student);
  };

  onSubmit(student1) {
    this.props.addStudent(student1);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <button type="button" onClick={() => this.onSubmit(student1)}>
            Submit
          </button>
          {console.log(this.props.allStudents)}
        </header>
      </div>
    );
  }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = state => {
  return {
    allStudents: state.studentReducer
  };
};

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = dispatch => {
  return {
    //incrementCounter: (amount) => dispatch(increment(amount)),
    //decrementCounter: (amount) => dispatch(decrement(amount)),
    //fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    //removeStudent: (id) => dispatch(removeStudentThunk(id)),
    //addStudent: student => dispatch(addStudentThunk(student))
    addStudent: student => dispatch(addStudent(student))
  };
};

export default connect(mapState, mapDispatch)(App);
