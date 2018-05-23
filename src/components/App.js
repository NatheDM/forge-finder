import React from "react";
import Header from "./Header.js";
import { Route, withRouter } from "react-router-dom";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Login from "./Login.js";
import Logout from "./Logout.js";
import "./app.css";

const App = props => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </div>
  );
};

export default withRouter(App);
