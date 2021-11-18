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
      <h1>Ava</h1>
      :null
    }
    
    <button onClick={()=>setPrint(true)}>
Show
    </button>
    <button onClick={()=>setPrint(false)}>
Hide
    </button>
    <button onClick={()=>setPrint(!print)}>
Toggle
    </button>
    
    <User name ="Ava"/>
    
  </div>
);
}
    
export default App;