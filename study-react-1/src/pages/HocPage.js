import React, { Component } from "react";
import "./HomePage.less";

// Cmp这里是function或者class组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props}></Cmp>
    </div>
  );
};

const foo2 = Cmp => props => {
  return (
    <div className="border-green">
      <Cmp {...props}></Cmp>
    </div>
  );
};

// HOC: 是个函数，接收一个组件，返回一个新的组件
// function Child(props) {
//   return <div>Child</div>;
// }

@foo
@foo
@foo2
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}

// const Foo = foo(Child);
// const Foo2 = foo2(foo(foo(Child)));
export default class HocPage extends Component {
  render() {
    return (
      <div>
        {/* <Foo></Foo> */}
        {/* <Foo2></Foo2> */}
        <Child></Child>
      </div>
    );
  }
}
