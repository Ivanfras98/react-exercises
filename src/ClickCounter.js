import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";
export function ClickCounter({initialValue}){
    const {counter, HandleCounterIncrement, HandleCounterDecrement, HandleCounterReset }=useCounter(initialValue)  
    
    function onCounterChange(){
      console.log(`The current value is ${counter}`)
    }
    useEffect(onCounterChange, [counter])
    
    return (
      <div>
        <CounterDisplay constDisplayCount={counter} />
        <button onClick={HandleCounterIncrement}>Increment Counter</button>
        <button onClick={HandleCounterDecrement}>Decrement Counter</button>
        <button onClick={HandleCounterReset}>Reset Counter</button>
      </div>
    ); 
}

// export class ClickCounter extends React.Component {
//   render() {
//     return (
//       <div>
//         <CounterDisplay constDisplayCount = {this.props.displayedCounter}/>
//         <button onClick={this.props.funProp}>Click me!</button>
//       </div>
//     );
//   }
// }
