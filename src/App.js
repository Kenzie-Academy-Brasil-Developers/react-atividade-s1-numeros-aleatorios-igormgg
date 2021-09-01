import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='numberBox'>
          <span> Seu número da sorte é o {number} </span>
        </div>
        <button onClick={randomNumber}>Sortear novo número</button>
      </header>
    </div>
  );
}

export default App;
