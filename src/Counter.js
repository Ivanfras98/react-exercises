import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        count : this.props.initialValue,
    }
    const stopCount = this.state.count
    setInterval(()=> this.setState((state)=> ({count : (state.count + this.props.incrementValue <= stopCount * 10 ? state.count + this.props.incrementValue : stopCount )})) , this.props.incrementInterval)
    console.log(stopCount)
   }
   render(){
    return  <CounterDisplay displayedCounter = {this.state.count} />       
   }
}