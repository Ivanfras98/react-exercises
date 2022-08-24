import React from "react";
import { Message } from "./Message";

export class Hello extends React.Component{
    render(){
        return (
        <h1> Hello, World! </h1>
        )
    }
}

export class App extends React.Component{
    render(){
        return (
          <div>
            <Hello />
            <Message />
          </div>
        );
    }
}