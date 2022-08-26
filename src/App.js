import React from "react";
import { Hello } from "./Hello";

export class App extends React.Component{
    render(){
        return (
          <div>
            <Hello />
            <p>What a beautiful day!</p>
          </div>
        );
    }
}