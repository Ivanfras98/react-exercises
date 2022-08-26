import React from "react";
import { Message } from "./Message";
import { Hello } from "./Hello";

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