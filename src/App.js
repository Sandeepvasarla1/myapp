import { useState } from 'react';
import './App.css';
import Usestate from './usesate';

function App() {
  const [name, setName] = useState("sandeep")
  console.log(name)
  function abc (){
    setName("swagkid")
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <Usestate></Usestate>
      <button onClick={abc}>Change</button>
    </div>
  );
}

export default App;
