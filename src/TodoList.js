import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Lavare i piatti", "Cucinare", "Dormire", "Studiare React"],
    todo: "",
  };
  inputChangeEventHandler = (event) => {
    this.setState({
      todo: event.target.value,
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

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={index}>{todo}</li>
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
      </>
    );
  }
}
