import React, {Fragment} from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home=()=>{
	return(
		<Fragment>
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
		</Fragment>
	)
}

export default Home;
