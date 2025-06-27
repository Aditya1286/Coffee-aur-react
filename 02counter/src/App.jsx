import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1)
  }
  const remValue = () =>{
    if(counter>0){
    setCounter(counter-1)}
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={remValue}>Decrease Value</button>
    </>
  )
}

export default App
