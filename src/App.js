import './App.css';

import React , { Component } from 'react';

import User from './User';
import logo from './logo.svg';
import { useState } from 'react';

function App() {

const [data, setData] = useState(null)
const [print, setPrint] = useState(false)

function getData(val) {
  setData(val.target.value);
  setPrint(false);
}
return (
  <div className="App">
    {
      print?
      <h1>{data}</h1>
      :null
    }
    <input type="text" onChange={getData}/>
    <button onClick={()=>setPrint(true)}>
Click here
    </button>
    <User name ="Ava"/>
    
  </div>
);
}
    
export default App;