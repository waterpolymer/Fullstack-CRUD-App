import React, { Component } from "react";
import "./App.css";
import { Home, AllStudents } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router basename="">
					<div>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/students" render={() => <AllStudents />} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
