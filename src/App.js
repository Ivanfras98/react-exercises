import React from "react";
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
            <Welcome name="Ciccio" age= "24" /> {/* Welcome Chiamato con Prop */}
          </div>
        );
    }
}