import React from "react";

//Components
import PlayerSelectView from "./PlayerSelectView.jsx"
import LiveGamingView from "./LiveGamingView.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<h2>Tic Tac Toe with React.js</h2>

			{/* Player select view component */}
			{/* <PlayerSelectView/> */}


			{/* Live game view component */}
			<LiveGamingView/>
		</div>
	);
};

export default Home;