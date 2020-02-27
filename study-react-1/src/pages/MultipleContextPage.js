import React, { Component } from "react";
import { ThemeConsumer } from "../ThemeContext";
import { UserConsumer, UserProvider } from "../UserContext";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>Multiple Context Page</h3>
        <ThemeConsumer>
          {theme => (
            <UserConsumer>
              {user => <div className={theme.themeColor}>{user.name}</div>}
            </UserConsumer>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}
