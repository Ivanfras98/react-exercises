import { createSlice } from "@reduxjs/toolkit";

export const todoState = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => state.filter((e) => e.id !== action.payload.id),
    edit : (state, action) => {
      const {id } = action.payload
      const user = state.find(u => u.id === id)
      for (let key in action.payload){
         user[key] = action.payload[key]
      }
    }
  },
});
