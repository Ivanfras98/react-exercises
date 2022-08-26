import React from "react";
export class ClickTracker extends React.Component {
  state = {
    ev: "",
  };
  trackTheEvent = (event) => {
    this.setState((state) => {
      return {
        ev: event.target,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.trackTheEvent}>
          Button 1
        </button>
        <button onClick={this.trackTheEvent}>
          Button 2
        </button>
        <button onClick={this.trackTheEvent}>
          Button 3
        </button>
        <h1>The last clicked button was : {this.state.ev.innerText}</h1>
      </div>
    );
  }
}
