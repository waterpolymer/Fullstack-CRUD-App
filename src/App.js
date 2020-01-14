import React, { Component } from "react";
import {
	Home,
	AllStudents,
	AddStudent,
	SingleStudent,
	AllCampuses
} from "./components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router basename="">
					<div>
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
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
