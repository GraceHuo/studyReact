import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "../kReactRouter";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/home">Home Page</Link>
          <Link to="/user">User Page</Link>

          <Route path="/home" component={HomePage} />
          <Route path="/user" component={UserPage} />
        </Router>
        {/* <Router>
          <Link to="/">Home Page</Link>
          <Link to="/user">User Page</Link>
          <Link to="/login">Login Page</Link>
          <Link to="/search/123">Search</Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/search/:id" component={SearchComponent} />
            <Route render={() => <div>404</div>} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

function SearchComponent(props) {
  const { id } = props.match.params;
  return (
    <div>
      search {id}
      <Link to={"/search/:" + id + "/detail"}>Detail</Link>
      <Route
        path={"/search/:" + id + "/detail"}
        component={DetailComponent}
      ></Route>
    </div>
  );
}

function DetailComponent(props) {
  return <div>DetailComponent</div>;
}
