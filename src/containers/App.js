
import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
// import Person from '../components/Persons/Person/Person';




class App extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log('[App.js] constructor');

  // }
  state = {
    persons: [
      {id:' asfa1', name: 'Max',age: 28},
      {id:'vasdf1', name: 'Manu',age: 29},
      {id:'asdf11', name: 'stepahine',age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]

    };

    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;

   this.setState( { persons: persons });
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
            
    
      }
 
 
    return ( 
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonHandler} />
          {persons}
      </div>
    );
}
}
export default App;