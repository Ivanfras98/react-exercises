import { useEffect, useState } from "react";

// import React from "react";
export function Login({ passFunc }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    disabled: true,
  });
  function handleDataChange(event) {
    const { name, type, checked, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  useEffect(() => {
    return setData((data) => {
      return {
        ...data,
        disabled: data.username !== "" && data.password !== "" ? false : true,
      };
    });
  }, [data]);
  function HandleLoginClick() {
    passFunc(data);
  }
  function resetAll() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }
  return (
    <form>
      <input
        value={data.username}
        onChange={handleDataChange}
        name="username"
      ></input>
      <input
        value={data.password}
        onChange={handleDataChange}
        name="password"
      ></input>
      <input
        value={data.remember}
        onChange={handleDataChange}
        name="remember"
        type="checkbox"
      ></input>
      <button type="button" disabled={data.disabled} onClick={HandleLoginClick}>
        Login
      </button>
      <button type="button" onClick={resetAll}>
        Reset
      </button>
    </form>
  );
}

// export class Login extends React.Component {
//   state = {
//     username: "",
//     remember: false,
//     password: "",
//     disabled: true,
//   };
//   inputChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const checked = event.target.checked;
//     const type = event.target.type;
//     console.log(name)
//     this.setState(
//       {
//         [name]: type === "checkbox" ? checked : value,
//       },
//       () =>
//         this.setState({
//           disabled:
//             this.state.username !== "" && this.state.password !== ""
//               ? false
//               : true,
//         })
//     );
//   };
//   HandlerLoginClick = (event) => {
//      this.props.passFunc(this.state)
//   };
//   resetAll = (event)=>{
//     this.setState({
//         username : "",
//         password : "",
//         remember : false
//     })
//   }

//   render() {
//     const buttonStyle = {
//       backgroundColor : this.state.password.length >= 8 ? "red" : "green",
//       color : this.state.password.length >= 8 ? "white" : "black"
//     }
//     return (
//       <div>
//         <input
//           name="username"
//           onChange={this.inputChangeHandler}
//           value={this.state.username}
//         />
//         <input
//           name="password"
//           type="password"
//           onChange={this.inputChangeHandler}
//           value={this.state.password}
//         />
//         <input
//           name="remember"
//           type="checkbox"
//           onChange={this.inputChangeHandler}
//           checked={this.state.remember}
//         />
//         <button style={buttonStyle} disabled={this.state.disabled} onClick={this.HandlerLoginClick}>
//           Login
//         </button>
//         <button onClick={this.resetAll}>Reset</button>
//       </div>
//     );
//   }
// }
