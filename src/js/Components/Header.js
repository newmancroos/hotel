import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  //const activeStyle = { color: "#F15B2A", "background-color": "coral" };
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <NavLink to="/" activeStyle={activeStyle} exact>
              Home
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle}>
              Courses
            </NavLink>
          </div>
          <div className="col col-lg-6 text-right">
            <NavLink to="/administrator" activeStyle={activeStyle}>
              Administrator
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
