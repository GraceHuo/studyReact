import React, { Component } from "react";
import ContextTypePage from "./ContextTypePage";
import { ThemeProvider } from "../ThemeContext";
import ConsumerPage from "./ConsumerPage";
import { UserProvider } from "../UserContext";
import MultipleContextPage from "./MultipleContextPage";
export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        name: "Grace"
      }
    };
  }
  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "green" : "red"
      }
    });
  };
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <button onClick={this.changeColor}>Change Color</button>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <ConsumerPage />
          <UserProvider value={user}>
            <MultipleContextPage></MultipleContextPage>
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}
