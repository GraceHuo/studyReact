import React, { Component } from "react";
import Dialog from "../components/Dialog";
export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }
  render() {
    const { showDialog } = this.state;
    return (
      <div>
        <h3>Dialog</h3>
        <button
          onClick={() => {
            this.setState({ showDialog: !showDialog });
          }}
        >
          Toggle{showDialog}
        </button>
        {showDialog && (
          <Dialog>
            <p>I am a text!</p>
          </Dialog>
        )}
      </div>
    );
  }
}
