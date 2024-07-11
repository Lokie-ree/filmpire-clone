import { useState } from 'react'
import './App.css';


const App = (props) => {
  const [counter, setCounter] = useState(10)

  return (
    <div className="App">
      <button onClick={() => {setCounter(counter - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>+</button>
    </div>
  );
}

export default App;
