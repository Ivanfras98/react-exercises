import React, { useEffect, useState } from "react";
// import { ClickCounter } from "./ClickCounter";

// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };
//   constructor(state){
//     super(state)
//     this.updateCounter = (event) => {
//       return (this.setState((state) => (state.count += 1)));
//     };
//   }
//   render() {
//     return <ClickCounter displayedCounter={this.state.count} funProp = {this.updateCounter}/>;
//   }
// }

export function Counter(){
    const [counter, setCounter] = useState(0)
    function setAll(){
      console.log("Counter mounted")
      setInterval(() => setCounter(c => c+1), 1000)
      return () => {
        console.log(`Getting unmounted`)
      }
    }

    useEffect(setAll, [])
    return <h1>The count is : {counter} </h1>
}

