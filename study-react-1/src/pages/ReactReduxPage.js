import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { bindActionCreators } from "../KReactRedux";

export default connect(
  // mapStateToProps
  // ! ownProps谨慎使用，如果ownProps发生变化，mapStateToProps会被重新执行，
  // ! state也不会被重新计算，这个时候影响性能
  (state, ownProps) => {
    console.log("ownProps", ownProps);
    return { count: state.count };
  },
  // mapDispatchToProps
  dispatch => {
    // let res = {
    //   add: () => dispatch({ type: "ADD" }),
    //   minus: () => dispatch({ type: "MINUS" })
    // };
    let res = {
      add: () => ({ type: "ADD" }),
      minus: () => ({ type: "MINUS" })
    };
    res = bindActionCreators(res, dispatch);
    return {
      dispatch,
      ...res
    };
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props", this.props);
      const { count, add, minus } = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{count}</p>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  }
);
