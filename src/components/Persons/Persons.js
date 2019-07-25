import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return (<Person
      click={() => props.clicked( index )}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={( event ) => props.changed(event,person.id)} />
)});
export default persons; 



// class Persons extends PureComponent{
//   // static getDerivedStateFromProps(props, state) {
//   //   console.log('[Persons.js getDerivedStateFromProps');
//   //   return state;
//   // }

//   // componentWillReceiveProps(props) {
//   //   console.log('[persons.js] componentWillReceiveProps');
//   // }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log('Persons.js] shouldComponentUpdate');
//   //   return true;
//   // }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('[Perons.js] getSnapshotBeforeUpdate');
//     return { message: 'Snapshot' };
//   }

//   // componentWillUpdate() {
//   //   console
//   // }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('[Persons.js] componentDidUpdate');
//     console.log(snapshot);
//   }

//   componentWillUnmount() {
//     console.log('[Person.js] componentWillUnmount');

//   }


//   render () {
//     console.log('[Persons.js] rendering...');
//     return this.props.persons.map((person, index) => {
          
//     return (
//       <Person 
//           click={() => this.props.clicked(index)}
//           name={person.name} 
//           age={person.age} 
//           key={person.id} 
//         changed={(event) => this.props.changed(event, person.id)} />
//     );   
//   });
//   }

// };

