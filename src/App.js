import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Message } from "./Message";
import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";


export class Hello extends React.Component {
  render() {
    return <h1> Hello, World! </h1>;
  }
}

export class App extends React.Component {
  onLogin(state) {
    console.log(state);
  }
  state = {
    language : "en"
  }
  HandleSelectChanges = (event)=> {
    this.setState({
      language : event.target.value
    })
  }

  render() {
    return (
      <Container title="My Awesome App">
        <div>
          <select
            value={this.state.language}
            onChange={this.HandleSelectChanges}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage ciccio = {this.state.language} />
        </LanguageContext.Provider>
        <Hello />
        <Message />
        <InteractiveWelcome />
        <Counter initialValue={5} />
        <ClickTracker />
        <Login passFunc={this.onLogin} />
        {/* <UncontrolledLogin passFunc = {this.onLogin}/>  */}
        <TodoList
          render={(items, del) => {
            return (
              <>
                <ul>
                  {items.map((todo, index) => (
                    <li key={index}>
                      {todo}{" "}
                      <button name={index} onClick={del}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            );
          }}
        ></TodoList>
      </Container>
    );
  }
}
