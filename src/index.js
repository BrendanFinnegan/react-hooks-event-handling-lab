import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);

// -useState
// -useEffect


// destructuring Objects
// {name, age, city} = props
// name will equal props.name
// age will equal props.age

// destructure arrays 
// [name, age, city] = props

// spread operate when using map!!
// {...el}

// will pass all key/values down to the list item

//state should be put in the lowest component that impacts all children components

//Use state always takes a value then a function
//we use array destructuring to set those in one foul swoop
// const [value,function] = useStaet(initial value)

// the goal of the function in the array is to set the value of the original value
//do not manipulate the value of state directly
//write a function that uses the second function that is passed to useState
