import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Gloria', age: 42 },
      { name: 'Alex', age: 33 }
    ]
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximus';
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Gloria', age: 42 },
      { name: 'Alex', age: 39 }
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 42 },
      { name: 'Alex', age: 39 }
    ]});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximus')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Prime')}
          changed={this.nameChangeHandler} >My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }

}

export default App;
