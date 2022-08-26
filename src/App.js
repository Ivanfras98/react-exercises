import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";

export class Hello extends React.Component {
  render() {
    return <h1> Hello, World! </h1>;
  }
}

export class App extends React.Component {
  onLogin(state){
    console.log(state)
  }
  render() {
    return (
      <div>
        <Hello />
        <Message />
        <InteractiveWelcome />
        <Counter initialValue={5} />
        <ClickTracker />
        <Login passFunc= {this.onLogin} />
      </div>
    );
  }
}
