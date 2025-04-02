import React from "react";

//Components
import PlayerSelectView from "./PlayerSelectView.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			{/* Player select view component */}
			<PlayerSelectView/>


			{/* Live game view component */}

		</div>
	);
};

export default Home;