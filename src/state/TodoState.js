import { logDOM } from "@testing-library/react";

const defaultValue = [];

const ADD = "TODO@ADD";
const REMOVE = "TODO@REMOVE";
const EDIT = "TODO@EDIT";

export function addTodo(setId, setTitle, setCompleted) {
  return {
    type: ADD,
    payload: {
      setId,
      setTitle,
      setCompleted,
    },
  };
}

export function removeTodo(setId, setTitle, setCompleted, id) {
  return {
    type: REMOVE,
    payload: {
      setId,
      setTitle,
      setCompleted,
    },
  };
}

export function editTodo(setId, setTitle, setCompleted) {
  return {
    type: EDIT,
    payload: {
      setId,
      setTitle,
      setCompleted,
    },
  };
}

export function TodosReducer(state = defaultValue, action) {
  switch (action.type) {
    case ADD: {
      return [
        ...state,
        {
          id: action.payload.setId,
          title: action.payload.setTitle,
          completed: action.payload.setCompleted,
        },
      ];
    }

    case REMOVE: {
      if (state.filter((e) => e.id !== action.payload.setId)) {
        return state.filter((e) => e.id !== action.payload.setId);
      }
      return state;
    }

    case EDIT: {
      state.find((e) => {
        if (e.id === action.payload.setId) {
            state.splice(state.indexOf(e), 1)
          return [
            ...state,
            {
              id: e.id,
              title: action.payload.setTitle,
              completed: action.payload.setCompleted,
            },
          ];
        }
        return [
          ...state,
          {
            id: e.id,
            title: action.payload.setTitle,
            completed: action.payload.setCompleted,
          },
        ];
      });
      return [
        ...state,
        {
          id: action.payload.setId,
          title: action.payload.setTitle,
          completed: action.payload.setCompleted,
        },
      ];
    }

    default: {
      return defaultValue;
    }
  }
}
