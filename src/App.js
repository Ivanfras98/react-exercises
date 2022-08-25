import React from "react";
import { Counter } from "./Counter";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

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
            <Welcome name="John" age= {24} />
            <Counter initialValue = {5} incrementValue = {10} incrementInterval = {1000}/>
          </div>
        );
    }
}