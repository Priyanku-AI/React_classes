import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let [counter, setCounter] = useState(5)
  const addValue = ()=>{
    console.log("value added", counter)
    if (counter<20)
    counter = counter + 1
    setCounter(counter)
    console.log("count is: ",counter)
  }

  const removeValue = () => {
    if (counter >0)
    setCounter(counter-1) 
  }

  return (
    <>
    <h1>Without Hooks</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br/>
    <button
    onClick={removeValue}
    disabled={counter === 0}
    >Remove value</button>
    <footer>Footer: {counter}</footer>
    <Card username="Paul" text="ok"/>
    </>
  )
}

export default App
