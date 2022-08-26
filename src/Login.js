import React from "react";

export class Login extends React.Component {
  render() {
    return (
      <div>
        <input name = "username" />
        <input name = "password" type="password" />
        <input name = "remember" type="checkbox" />
      </div>
    );
  }
}
