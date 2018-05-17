import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignClasess = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignClasess.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasess.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasess.join(' ')}>This is really working!</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;