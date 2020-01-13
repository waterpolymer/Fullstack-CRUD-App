import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, AllStudents } from "./components";

const AppView = props => {
	const { allStudents, addStudent } = props;

	const HomeComponent = () => <Home />;
	const AllStudentComponent = () => (
		<AllStudents allStudents={allStudents} addStudent={addStudent} />
	);

	return (
		<div className="App">
			<Router basename="">
				<div>
					<Route exact path="/" render={HomeComponent} />
					<Route exact path="/students" render={AllStudentComponent} />
				</div>
			</Router>
		</div>
	);
};

export default AppView;
