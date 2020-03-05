import React, { Component } from "react";
import { createBrowserHistory } from "history";

const RouterContext = React.createContext();

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.history = createBrowserHistory();
    this.history.listen(location => {
      console.log("location", location);
    });
  }
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children}
        value={{ history: this.history }}
      />
    );
  }
}

export class Route extends Component {
  render() {
    const { path, component } = this.props;
    const match = window.location.pathname === path;
    return match ? React.createElement(component, this.props) : null;
  }
}

export class Link extends Component {
  static contextType = RouterContext;
  handleClick = event => {
    const { history } = this.context;
    event.preventDefault();
    history.push(this.props.to);
  };
  render() {
    return (
      <a href={this.props.to} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
