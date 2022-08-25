import React from "react";

export class CounterDisplay extends React.Component{
    render(){
        return <h1> Count : {this.props.displayedCounter} </h1>
    }
}