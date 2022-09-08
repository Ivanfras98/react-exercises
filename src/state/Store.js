import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterState } from "./CounterState";
import { addTodo, editTodo, removeTodo, todoState } from "./TodoState";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todoState.reducer,
});
export const store = createStore(rootReducer);

store.subscribe(()=> {
  console.log(store.getState())
})

store.dispatch(counterState.actions.increment(5));
store.dispatch(todoState.actions.add({id : 1, title : "Lavare i piatti", completed : true}));
store.dispatch(todoState.actions.edit({id : 1, title : "Cucinare", completed : true}));
 store.dispatch(todoState.actions.add({id : 2 , title : "Studiare", completed : true}));
 store.dispatch(todoState.actions.add({id : 3 , title : "Uscire", completed : false}));
store.dispatch(todoState.actions.remove({id : 2}));
store.dispatch(todoState.actions.remove({id : 3}));

