import React, { Component } from "react";
import store from "../store/";
import kFormCreate from "../components/KFormCreate";
const numRules = { required: true, message: "Please enter a number" };
export default kFormCreate(
  class CalculatorPage extends Component {
    componentDidMount() {
      store.subscribe(() => {
        this.forceUpdate();
      });
    }

    validate = callback => {
      const { validateFields } = this.props;

      validateFields((err, values) => {
        console.log(err, values);

        if (err) {
          console.log("Error: ", err);
        } else {
          callback();
        }
      });
    };

    add = () => {
      this.validate(() => {
        const { getFieldValue } = this.props;
        const num = getFieldValue("num");
        store.dispatch({ type: "ADD", payload: num - 0 });
      });
    };

    render() {
      const { getFieldDecorator } = this.props;
      return (
        <div>
          <h3>CalculatorPage</h3>
          <p>{store.getState().count}</p>

          {getFieldDecorator("num", { rules: [numRules] })(
            <input type="text" />
          )}
          <button onClick={this.add}>add</button>
        </div>
      );
    }
  }
);
