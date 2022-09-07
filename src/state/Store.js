import { legacy_createStore as createStore } from "redux";
import { counterReducer, incremetCounter } from "./CounterState";


export const store = createStore(counterReducer)

store.subscribe(()=> {
    console.log("The store is :", store.getState())
})

store.dispatch(incremetCounter(5))

