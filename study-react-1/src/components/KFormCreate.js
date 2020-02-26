import React, { Component } from "react";
export default function KFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
      this.state = { errors: {} };
    }
    handleChange = e => {
      let { name, value } = e.target;

      // this.setState({ [name]: value }, () => {
      //   this.validate();
      // });

      this.validate({
        ...this.state,
        [name]: value
      });
    };
    getFieldsValue = () => {
      return { ...this.state };
    };

    getFieldValue = field => {
      return this.state[field];
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return InputCmp => {
        // 克隆一份
        console.log(this.state);
        return (
          <div>
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || "",
              onChange: this.handleChange
            })}
            <p>{this.state.errors[field]}</p>
          </div>
        );
      };
    };

    validate = state => {
      // 检验错误信息
      const errors = {};
      for (let name in this.options) {
        if (state[name] === undefined) {
          // 没有输入，判断为不合法
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, errors });
    };
    validateFields = callback => {
      const state = { ...this.state };
      this.validate(state);
      const { errors } = state;
      if (JSON.stringify(errors) === "{}") {
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };
    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
