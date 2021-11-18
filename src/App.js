import './App.css';

import React , { Component } from 'react';

import User from './User';
import logo from './logo.svg';
import { useState } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={
    data:0
  }

}

 setUpdate(){
   this.setState({data: this.state.data+1})
  alert("Anika")
    }

    render() {
      return (
        <div className="App">
          <h3>{this.state.data}</h3>
          <button onClick={()=>this.setUpdate()}>
    Click here
          </button>
          <User/>
          
        </div>
      );

    }

}
export default App;