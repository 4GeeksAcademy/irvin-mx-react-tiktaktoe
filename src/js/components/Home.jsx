import React, { useState } from "react";

//Components
import PlayerSelectView from "./PlayerSelectView.jsx"


const Home = () => {
	return (
		<div className="container-fluid h-100 bg-secondary bg-gradient text-center">
			<h1 className="text-light">Tic Tac Toe with React.js</h1>
			<PlayerSelectView/>
		</div>
	);
};

export default Home;