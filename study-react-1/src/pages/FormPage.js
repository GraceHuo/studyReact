import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  submit = () => {
    console.log("submit", this.state);
  };
  render() {
    const { name, password } = this.state;
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            <Input
              placeholder="please input username"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              placeholder="please input password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
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
