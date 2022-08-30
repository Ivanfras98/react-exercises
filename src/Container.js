import React from "react";

export class Container extends React.Component {
  render() {
    const myStyle = {
      backgroundColour: "white",
      border: "3px solid red",
    };

    return (
      <div style={myStyle}>
        <div>{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
