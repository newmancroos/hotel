import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import Administrator from "./Administration/Administrator";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/administrator" component={Administrator} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
