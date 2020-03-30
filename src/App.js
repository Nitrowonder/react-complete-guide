import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tracer', age: 26 }, 
      { name: 'Junkrat', age: 31 }, 
      { name: 'Mei', age: 25 } 
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked')
    //DON'T DO THIS: this.state.persons[0].name = "Super Tracer"
    this.setState({
      persons: [
        { name: 'Lena', age: 26 }, 
        { name: 'Junkrat', age: 25 }, 
        { name: 'Mei', age: 41 } 
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: splodin' stuff</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //The code above compiles down to the line below this. Neat!
    //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi, I\'m a React App'))
  }
}

export default App;
