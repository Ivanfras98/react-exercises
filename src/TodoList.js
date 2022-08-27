import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Lavare i piatti", "Cucinare", "Dormire", "Studiare React"],
    todo: "",
  };
  inputChangeEventHandler = (event) => {
    this.setState({
      todo: event.target.value,
      focus : event.target
    });
  };
  buttonEventHandler = () => {
    this.setState((state) => {
      state.items.push(state.todo);
    },()=> this.setState((state2)=> {
        state2.todo = ""
        return state2.items
    }));
  };
  resetTodosHandler = ()=>{
    this.setState({
        items : []
    })
  }
  deleteTodoHandler = (event) => {
    const pressedBtn = event.target.name
    this.setState(
      (state) => {},
      () => this.setState((state) => state.items.splice(pressedBtn, 1))
    );
  }

  render() {
    return (
      <>
        <h3>Todo List:</h3>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={index}>{todo} <button name={index} onClick={this.deleteTodoHandler}>Delete</button></li>
          ))}
        </ul>
        <input
          name="todo"
          value={this.state.todo}
          onChange={this.inputChangeEventHandler}
        />
        <button name="button" onClick={this.buttonEventHandler}>
          Add todo
        </button>
        <button onClick={this.resetTodosHandler}>Reset Todos</button>
      </>
    );
  }
}
