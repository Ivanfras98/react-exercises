import { useCallback, useState } from "react";

export function useCounter(initialValue){
    const [counter, setCounter] = useState(initialValue);

    const HandleCounterIncrement = useCallback(function HandleCounterIncrement() {
      setCounter((c) => c + 1);
    }, [])
    const HandleCounterDecrement = useCallback(function HandleCounterDecrement(){
        setCounter((c)=> c -1)
    },[])
    const HandleCounterReset = useCallback(function HandleCounterReset(){
        setCounter(initialValue)
    }, [initialValue])
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
