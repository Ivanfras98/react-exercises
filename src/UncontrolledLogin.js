import React from "react";

export class UncontrolledLogin extends React.Component {
  SubmitHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    
    this.props.passFunc({username,password,remember})
  };

  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
