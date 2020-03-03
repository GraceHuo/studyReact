import React, { Component } from "react";
import { connect } from "../KReactRedux";
// import { connect } from "react-redux";
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
  // 1. 如果不指定，dispatch
  // 2. Object
  // 3. Function
  (dispatch, ownProps) => {
    // {
    //     add: () => ({ type: "ADD" }),
    //     minus: () => ({ type: "MINUS" })
    // }

    // let res = {
    //   add: () => dispatch({ type: "ADD" }),
    //   minus: () => dispatch({ type: "MINUS" })
    // };
    let res = {
      add: () => ({ type: "ADD", payload: ownProps.num }),
      minus: () => ({ type: "MINUS", payload: ownProps.num })
    };

    res = bindActionCreators(res, dispatch);
    return {
      dispatch,
      ...res
    };
  },
  // mergeProps
  (stateProps, dispatchProps, ownProps) => {
    return {
      omg: "omg",
      ...stateProps,
      ...dispatchProps,
      ...ownProps
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
