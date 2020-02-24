import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

const nameRules = { required: true, message: "please enter your name" };
const passwordRules = { required: true, message: "please enter your password" };

@Form.create({})
class FormPage2 extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
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
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator("name", { rules: [nameRules] })(
              <Input placeholder="please input username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input type="password" placeholder="please input password" />
            )}
          </Form.Item>
          <FormItem>
            <Button type="primary" onClick={this.submit}>
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormPage2;
