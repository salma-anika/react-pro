import './App.css';

import User from './User';
import logo from './logo.svg';

function App() {
  let data="Anika";
  function Apple(){
        alert("Hello");
      }
  
  return (
    <div className="App">
      <h3>{data}</h3>
      <button onClick={Apple}>
Click here
      </button>
      <User/>
      
    </div>
  );
}

export default App;
