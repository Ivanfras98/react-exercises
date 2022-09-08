import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer, incremetCounter } from "./CounterState";
import { addTodo, editTodo, removeTodo, TodosReducer } from "./TodoState";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: TodosReducer,
});

export const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("The store is :", store.getState());
});

store.dispatch(incremetCounter(5));
store.dispatch(addTodo(1, "Lavare i piatti", true));
store.dispatch(editTodo(1, "Studiare Redux", false))
store.dispatch(addTodo(2, "Studiare", true));
store.dispatch(addTodo(3, "Uscire", false));
store.dispatch(removeTodo(2))
store.dispatch(removeTodo(3))

