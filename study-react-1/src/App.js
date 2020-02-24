import React from "react";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";
import { Button } from "antd";
import HocPage from "./pages/HocPage";
import FormPage from "./pages/FormPage";
import FormPage2 from "./pages/FormPage2";
function App() {
  return (
    <div className="App">
      {/* Test antd */}
      {/* <Button type="primary">Submit</Button> */}

      {/* 高阶组件 */}
      {/* <HocPage /> */}

      {/* 表单组件 */}
      {/* <FormPage /> */}

      {/* 表单组件, 使用create */}
      <FormPage2 />
    </div>
  );
}

export default App;
