import React from "react";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";
import { Button } from "antd";
import HocPage from "./pages/HocPage";
import FormPage from "./pages/FormPage";
import FormPage2 from "./pages/FormPage2";
import MyFormPage from "./pages/MyFormPage";
import DialogPage from "./pages/DialogPage";
import ContextPage from "./pages/ContextPage";
import ReduxPage from "./pages/ReduxPage";
import CalculatorPage from "./pages/CalculatorPage";
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
      {/* <FormPage2 /> */}

      {/* 自己实现一个create */}
      {/* <MyFormPage /> */}

      {/* 弹窗组件 */}
      {/* <DialogPage></DialogPage> */}

      {/* 上下文 */}
      {/* <ContextPage /> */}

      {/* Redux */}
      <ReduxPage />

      {/* Calculator */}
      {/* <CalculatorPage /> */}
    </div>
  );
}

export default App;
