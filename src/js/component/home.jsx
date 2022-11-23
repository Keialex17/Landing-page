import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
		<Card />
      	<Card />
     	 <Card />
		</div>
      </div>

    </Fragment>
  );
};

export default Home;
