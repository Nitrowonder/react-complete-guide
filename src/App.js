import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Tracer', age: 26 }, 
      { name: 'Junkrat', age: 25 }, 
      { name: 'Mei', age: 31 } 
    ]
  })

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    //console.log('was clicked')
    //DON'T DO THIS: this.state.persons[0].name = "Lena"
    setPersonsState({
      persons: [
        { name: newName, age: 26 }, 
        { name: 'Junkrat', age: 25 }, 
        { name: 'Mei', age: 41 } 
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Tracer', age: 26 }, 
        { name: event.target.value, age: 25 }, 
        { name: 'Mei', age: 41 } 
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Lena')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
         />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Bob')}
        changed={nameChangeHandler.bind(this)}>My Hobbies: splodin' stuff</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        />
    </div>
  );
  //The code above compiles down to the line below this. Neat!
  //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi, I\'m a React App'))
}

export default app;


// state = {
//   persons: [
//     { name: 'Tracer', age: 26 }, 
//     { name: 'Junkrat', age: 25 }, 
//     { name: 'Mei', age: 31 } 
//   ]
// }

// switchNameHandler = () => {
//   //console.log('was clicked')
//   //DON'T DO THIS: this.state.persons[0].name = "Super Tracer"
//   this.setState({
//     persons: [
//       { name: 'Lena', age: 26 }, 
//       { name: 'Junkrat', age: 25 }, 
//       { name: 'Mei', age: 41 } 
//     ]
//   })
// }