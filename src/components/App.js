import React from "react";
import Header from "./Header.js";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Cast from "./Cast.js";
import services from "../service";
import "./app.css";

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "LOAD_DWARF", payload })
});

const App = ({ onLoad }) => {
  services.dwarves.all().then(dwrf => onLoad(dwrf));
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/cast" component={Cast} />
      </div>
    </div>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(App));
