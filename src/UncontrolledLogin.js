import React from "react";
import { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _userNameRef = createRef()
  SubmitHandler = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    
    this.props.passFunc({username,password,remember})
  };
  componentDidMount(){
    this._userNameRef.current.focus()
  }

  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <input ref={this._userNameRef} name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
