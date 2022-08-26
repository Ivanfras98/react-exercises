import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name : "",
    value : "",
  }
  HandleInputChange = (event) => {
    const value = event.target.value
    this.setState({
        value,
    })
  }
  render() {
    console.log(this.state.value)
    return (
      <>
        <input name="welcomename" value={this.state.value} onChange={this.HandleInputChange}/>
        <Welcome name = {this.state.value}/>
      </>
    );
  }
}
