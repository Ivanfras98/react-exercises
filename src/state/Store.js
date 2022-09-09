import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterState } from "./CounterState";
import { todoState } from "./TodoState";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todoState.reducer,
});
export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterState.actions.increment(5));
store.dispatch(
  todoState.actions.add({ id: 1, title: "Lavare i piatti", completed: true })
);
store.dispatch(
  todoState.actions.edit({ id: 1, title: "Cucinare", completed: true })
);
store.dispatch(
  todoState.actions.add({ id: 2, title: "Studiare", completed: true })
);
store.dispatch(
  todoState.actions.add({ id: 3, title: "Uscire", completed: false })
);
store.dispatch(todoState.actions.remove({ id: 2 }));
store.dispatch(todoState.actions.remove({ id: 3 }));
