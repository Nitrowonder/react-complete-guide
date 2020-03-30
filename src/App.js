import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Tracer" age="26" />
        <Person name="Junkrat" age="25">My Hobbies: Blowing stuff up</Person>
        <Person name="Mei" age="31"/>
      </div>
    );
    //The code above compiles down to the line below this. Neat!
    //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi, I\'m a React App'))
  }
}

export default App;
