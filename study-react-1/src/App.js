import React from "react";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";
import { Button } from "antd";
import HocPage from "./pages/HocPage";
function App() {
  return (
    <div className="App">
      {/* Test antd */}
      <Button type="primary">Submit</Button>
      <hr></hr>
      {/* 高阶组件 */}
      <HocPage></HocPage>
    </div>
  );
}

export default App;
