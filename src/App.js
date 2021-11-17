import './App.css';

import User from './User';
import logo from './logo.svg';

function Apple(){
  return (
    <h1>Apple</h1>
  )
}
function App() {
  return (
    <div className="App">
      <h3>Hello world</h3>
      <User/>
      {Apple()}
    </div>
  );
}

export default App;
