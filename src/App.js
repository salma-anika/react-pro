import './App.css';

import User from './User';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [data,setData] = useState("Ava")
  function setUpdate(){
setData("Anika")
  }
  return (
    <div className="App">
      <h3>{data}</h3>
      <button onClick={setUpdate}>Update</button>

      <User/>
      
    </div>
  );
}

export default App;
