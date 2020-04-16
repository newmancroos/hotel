import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch, NavLink } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminHome from "./AdminHome";
import Branch from "./Branch/Branch";
import PageNotFound from "../PageNotFound";
import EditBranch from "./Branch/BranchEdit";
const Administrator = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="jumbotron adminContainer">
      <h1>Manage Application</h1>
      {/* <AdminHeader /> */}
      <div className="row">
        <div id="adminMenu" className="col col-lg-2">
          <div className="adminMenuItem">
            <NavLink to="/administrator" activeStyle={activeStyle} exact>
              <b>Admin Home</b>
            </NavLink>
          </div>
          <ul>
            <li>
              <div className="adminMenuItem">
                <NavLink to="/administrator/branch" activeStyle={activeStyle}>
                  <b>Branch</b>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="col col-lg-10">
          <Switch>
            <Route exact path="/administrator" component={AdminHome} />
            <Route exact path="/administrator/branch" component={Branch} />
            <Route
              exact
              path="/administrator/branch/edit/:id"
              component={EditBranch}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Administrator;
