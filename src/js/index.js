import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
const wrapper = document.getElementById("container");
wrapper
  ? ReactDOM.render(
      <Router>
        <App />
      </Router>,
      wrapper
    )
  : false;
