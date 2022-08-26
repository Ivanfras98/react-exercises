import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";

export class Hello extends React.Component {
  render() {
    return <h1> Hello, World! </h1>;
  }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
        <InteractiveWelcome />
        <Counter initialValue={5} />
        <ClickTracker />
      </div>
    );
  }
}
