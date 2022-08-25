import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        count : this.props.initialValue,
    }
    setInterval(()=> this.setState((state)=> ({count : state.count + this.props.incrementValue})) , this.props.incrementInterval)
   }
   render(){
    return  <CounterDisplay displayedCounter = {this.state.count}/>       
   }
}