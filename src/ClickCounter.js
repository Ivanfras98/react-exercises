import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <CounterDisplay constDisplayCount = {this.props.displayedCounter}/>
        <button onClick={this.props.funProp}>Click me!</button>
      </div>
    );
  }
}
