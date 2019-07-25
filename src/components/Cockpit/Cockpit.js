import React from 'react';
import classes from './Cockpit.css';



const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  
  if (props.persons.length <= 2 ) {
    assignedClasses.push( classes.red );
  } 
  if (props.persons.length <= 1 ) {
    assignedClasses.push( classes.bold );
  }

  return ( 
    <div className={classes.Cockpit}>
  <h1>Hi, I'm a React App</h1>
  <p className={assignedClasses.join( ' ' )}>This is really working</p>
  <button 
    className={btnClass}
    onClick={props.clicked}>Toggle persons</button>
    </div> 
  );
};

export default cockpit;

// const cockpit = ( props ) => {
//   const toggleBtnRef = useRef(null);

//   const authContext = useContext(AuthContext);
//   console.log(authContext.authenticated);

//   useEffect(() => {
//     console.log('[Cockpit.js] useEffect'); 

//     //Http request
//     // setTimeout(() => {
//     //   alert('Saved data to cloud');
//     // }, 1000); 


//     toggleBtnRef.current.click();

//     return () => {
      
//       console.log('[Cockpit.js cleanup work in useEffect');
//     };
//   }, []);


//     useEffect(() => {
//       console.log('[Cockpit.js] 2nd useEffect');  
//       return () => {
//         console.log('[Cockpit.js cleanup work in  2nd useEffect');
//       };
//     });

//     const assignedClasses = []; 
//     let btnClass = '';
//     if (props.showPersons) {
//         btnClass = classes.Red;
//     }
     
//     if (props.personsLength <= 2) {
//       assignedClasses.push( classes.red );
//     }
//     if(props.personsLength <= 1) {
//       assignedClasses.push( classes.bold );
//     }

//     return(
//         <div className={classes.Cockpit}>
//         <h1>{ props.title }</h1>
//         <p className={assignedClasses.join(' ')}>this is really working!</p>
//         <button  
//           ref = {toggleBtnRef}
//           className={btnClass}
//         onClick={props.clicked}>Toggle persons</button>
        
//           <button onClick={authContext.login}>Login </button>
        
//         </div>
//     );
// };

// export default React.memo(cockpit);