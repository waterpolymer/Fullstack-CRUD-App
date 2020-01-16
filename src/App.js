import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
  Home,
  AllStudents,
  AddStudent,
  EditStudent,
  SingleStudent,
  AllCampuses,
  AddCampus,
  EditCampus,
  SingleCampus,
  NavBar
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="">
          <NavBar />
          <div className="app-h">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/students" render={() => <AllStudents />} />
            <Route exact path="/campuses" render={() => <AllCampuses />} />
            <Route
              exact
              path="/students/:studentId"
              render={props => <SingleStudent {...props} />}
            />
            <Route
              exact
              path="/students/add-student"
              render={() => <AddStudent />}
            />
            <Route
              exact
              path="/students/:studentid/edit-student"
              render={props => <EditStudent {...props} />}
            />
            <Route
              exact
              path="/campuses/:campusId"
              render={props => <SingleCampus {...props} />}
            />
            <Route
              exact
              path="/campuses/add-campus"
              render={() => <AddCampus />}
            />
            <Route
              exact
              path="/campuses/:campusid/edit-campus"
              render={props => <EditCampus {...props} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
