import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
export function ClickCounter({initialValue}){
    const [counter, setCounter ] = useState(initialValue)
    
    function HandleCounterIncrement(){
      setCounter(c => c + 1)
    }

    
    return (
      <div>
        <CounterDisplay constDisplayCount= {counter} />
        <button onClick={HandleCounterIncrement}>Click me!</button>
      </div>
    ) 
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
