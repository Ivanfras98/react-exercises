import { useState } from "react";

export function useCounter(initialValue){
    const [counter, setCounter] = useState(initialValue);

    function HandleCounterIncrement() {
      setCounter((c) => c + 1);
    }
    function HandleCounterDecrement(){
        setCounter((c)=> c -1)
    }
    function HandleCounterReset(){
        setCounter(initialValue)
    }
    function onCounterChange() {
      console.log(`The current value is ${counter}`);
    }
    return {
        counter,
        HandleCounterDecrement,
        HandleCounterIncrement,
        HandleCounterReset,
        onCounterChange,
    }
}
