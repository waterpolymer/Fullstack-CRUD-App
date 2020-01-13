import React, { Component } from "react";
import "./App.css";
import { Home, AllStudents, AddStudent, SingleStudent } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router basename="">
					<div>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/students" render={() => <AllStudents />} />
						<Route
							exact
							path="/students/:studentid"
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
