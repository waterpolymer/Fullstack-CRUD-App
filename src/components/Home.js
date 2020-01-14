import React from "react";

import LinkButton from "./utilities/LinkButton";

const Home = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<LinkButton to="/students">All Students</LinkButton>
			<LinkButton to="/campuses">All Campuses</LinkButton>
		</div>
	);
};

export default Home;
