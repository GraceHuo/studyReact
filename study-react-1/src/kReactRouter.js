import React, { Component } from "react";
import { createBrowserHistory } from "history";
import matchPath from "./matchPath";

const RouterContext = React.createContext();

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location
    };
    this.unlisten = this.history.listen(location => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children}
        value={{ history: this.history, location: this.state.location }}
      />
    );
  }
}

export class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { path, children, component, render } = this.props;
          //   return match ? React.createElement(component, this.props) : null;
          const location = this.props.location || context.location;
          const match = matchPath(location.pathname, this.props);
          const props = {
            ...context,
            location,
            match
          };
          // match 渲染 children， component， render 或者 null
          // 不match children 或者 null
          return (
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === "function"
                ? children(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
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
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export class Switch extends Component {
  render() {
    // return this.props.children;
    return (
      <RouterContext.Consumer>
        {context => {
          let element,
            match = null;
          const location = this.props.location || context.location;

          const { children } = this.props;
          React.Children.forEach(children, child => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match;
            }
          });
          return match ? React.cloneElement(element, { location }) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}

export class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { history } = context;
          const { to } = this.props;
          return <LifeCycle onMount={() => history.push(to)} />;
        }}
      </RouterContext.Consumer>
    );
  }
}

class LifeCycle extends Component {
  render() {
    return null;
  }
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }
}
