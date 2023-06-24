import React, { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState(0)
  const [age, setage] = useState("")
  const [height, setheight] = useState(0)
  const [superpower, setsuperpower] = useState("")
  const [displayCharater, setdisplayCharacter] = useState(false)
  return (
    <div className="App">
      <div>
      <h1>Hello ZS App Visitors</h1>
      <label> Name: </label>
          <input type="text" 
          style = {{ margin: 10 }} 
          onChange = {(event) => {
          setName(event.target.value);
          }}
          /> 

      <label> age: </label>
          <input type="number" style={{ margin: 10 }}  
          onChange = {(event) => {
          setage(event.target.value);
            }}
          />
      <label> Height: </label>
          <input type="text" style={{ margin: 10 }} 
          onChange = {(event) => {
          setheight(event.target.value);
            }}
          /> 
      <label> Superpower: </label>
          <input type="text" style={{ margin: 10 }} 
          onChange = {(event) => {
          setsuperpower(event.target.value);
              }}
          />
      </div>
          <button
           onClick={() => {
           setdisplayCharacter(true);
          }}  
           >
           Display charater
          </button>
          
              <div>
              <h1> VIsiter Info </h1>
                { displayCharater && (
              <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{height}</li>
                <li>{superpower}</li>
                <li>{ displayCharater}</li>
              </ul>
              )}  
              </div>  
              </div>
  );
}

export default App;
