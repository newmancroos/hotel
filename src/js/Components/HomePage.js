import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and Reac Router for ultra-responsive web apps.</p>
    <Link to="/#/about" className="btn btn-primary btn-l">
      Learn more
    </Link>
  </div>
);

export default HomePage;
