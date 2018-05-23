import React from "react";
import Header from "./Header.js";
import { Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Login from "./Login.js";
import Logout from "./Logout.js";
import Cast from "./Cast.js";
import dwarfReducer from "../reducers/dwarfReducer";
import "./app.css";

const store = createStore(
  dwarfReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = props => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default withRouter(App);
