import React, { Component } from "react";
import {
	Home,
	AllStudents,
	AddStudent,
	SingleStudent,
	AllCampuses,
	EditStudent
} from "./components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router basename="">
					<NavBar />
						<div>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/students" render={() => <AllStudents />} />
						<Route exact path="/campuses" render={() => <AllCampuses />} />
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
						<Route 
							exact 
							path="/students/:studentid/edit-student" 
							render={(props) => <EditStudent {...props} />}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
