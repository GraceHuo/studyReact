import React, { Component } from "react";
import KFormCreate from "../components/KFormCreate";
const nameRules = { required: true, message: "please enter your name" };
const passwordRules = { required: true, message: "please enter your password" };

@KFormCreate
class MyFormPage extends Component {
  submit = () => {
    console.log("submit");
    const { getFieldsValue, getFieldValue, validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("success", values);
      }
    });
    console.log("submit", getFieldsValue(), getFieldValue("name"));
  };
  render() {
    console.log("props", this.props);
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { rules: [nameRules] })(
          <input type="text" placeholder="please enter your username" />
        )}

        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input type="password" placeholder="please enter your password" />
        )}

        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default MyFormPage;
