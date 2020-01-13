import React from "react";
import LinkButton from "./LinkButton";

const Home = props => {
	return (
		<div>
			<h1>Hello World</h1>
			<LinkButton to="/students">All Students</LinkButton>
		</div>
	);
};

export default Home;
