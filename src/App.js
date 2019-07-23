import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

 
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name:'stepahine' ,age:26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // don't do this this.state.persons[0].name = 'Amresh';
    this.setState({
      persons: [
      { name: newName, age:28},
      {name: 'Manu', age:29},
      {name:'stepahine' ,age:27}
    ]
})
  }

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]

  };

  person.name = event.target.value;


  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons});
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons;
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}
  
  render () {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
      let persons = null;

      if ( this.state.showPersons ) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
        </div> 
        );

        style.backgroundColor = 'red';  
    
      }

      const classes = [];
      if (this.state.persons.length <= 2) {
        classes.push('red');
      }
      if(this.state.persons.length <= 1) {
        classes.push('blod');
      }
   
      return (
    
            <div className="App">
              <h1>Hi, I'm React App</h1>
              <p className={classes.join(' ')}>this is really working!</p>
              <button 
              style={style}
              // onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
              onClick={this.togglePersonHandler}>Toggle persons</button>
              {persons}
            </div>
          
          );
      };

    };
    
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'I\'m a React App!!!'));





export default App;


