import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    remember: false,
    password: "",
    disabled: true,
  };
  inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    this.setState(
      {
        [name]: type === "checkbox" ? checked : value,
      },
      () =>
        this.setState({
          disabled:
            this.state.username !== "" && this.state.password !== ""
              ? false
              : true,
        })
    );
  };
  HandlerLoginClick = (event) => {
     this.props.passFunc(this.state)
  };
  resetAll = (event)=>{
    this.setState({
        username : "",
        password : "",
        remember : false
    })
  }

  render() {
    return (
      <div>
        <input
          name="username"
          onChange={this.inputChangeHandler}
          value={this.state.username}
        />
        <input
          name="password"
          type="password"
          onChange={this.inputChangeHandler}
          value={this.state.password}
        />
        <input
          name="remember"
          type="checkbox"
          onChange={this.inputChangeHandler}
          checked={this.state.remember}
        />
        <button disabled={this.state.disabled} onClick={this.HandlerLoginClick}>
          Login
        </button>
        <button onClick={this.resetAll}>Reset</button>
      </div>
    );
  }
}
