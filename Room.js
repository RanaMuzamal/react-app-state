import { useState } from 'react';
import logo from './logo.svg';
import './Room.css'

function Room() {
  //const state = useState(true);
  //console.log("State = ",state);
  let [islit,setLit] = useState(false);
  let [age,setage] = useState(25);
  //let age = 45;
  //islit = !islit;
  function updatelist(){
    console.log( "Button Clicked" );
    setLit(!islit);
  } 
  //Arrow Function
  const IncAge = ()=>{
    console.log( "Age Increased Button Clicked" );
    setage(++age);
  } 
  return (
   <div  className={`room ${islit ? "lit" : "dark"}`}>
     Room Component is {islit? "Lit" :"Dark"}
     <br/>
     Age = {age}
     <br/>
     <button onClick = {updatelist}>Toggle Button</button>
     <button onClick = {IncAge}>Update Age</button>
   </div>
  );
}

export default Room;

//<button onClick = { ()=>
//console.log("Increase Age Arrow Function")}> Increase Age</button>
