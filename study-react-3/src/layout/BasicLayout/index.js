import React, { Component } from "react";
import BottomNav from "../../components/BottomNav/";
import classnames from "classnames";
import "./index.scss";

export default class BasicLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={classnames("basicLayout")}>
        <article>{children}</article>
        <BottomNav />
      </div>
    );
  }
}
