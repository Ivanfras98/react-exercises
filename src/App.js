import React from "react";
import { CarDetails } from "./CarDetails";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
// import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { FilteredList } from "./FilteredList";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
// import { GithubUser } from "./GitHubUser";
// import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Message } from "./Message";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
import { Inputs } from "./useInput";
import { Welcome } from "./Welcome";
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
    language : "en", 
    count : true
  }
  HandleSelectChanges = (event)=> {
    this.setState({
      language : event.target.value
    })
  }
  
  hideCounter = () => {
    this.setState((state)=> state.count = !state.count)
  }
  
  render() {
    return (
      <Container title="My Awesome App">
        {/* <Inputs /> */}
        <FilteredList />
        <CarDetails />
        <div>
          <select
            value={this.state.language}
            onChange={this.HandleSelectChanges}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </div>
        {/* <GithubUserList /> */}
        <GithubUser username="Ivanfras98"/>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Hello /> 
        <Sum />
        <Message />
        <Welcome name="Ivan" age={24} />
        {/* <InteractiveWelcome /> */}
        <Counter initialValue={5} />
        <ClickCounter initialValue={5} />
        <button onClick={this.hideCounter}>Toggle counter</button>
        {this.state.count && <Counter />}
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
