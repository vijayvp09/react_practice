import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  
  const addValue = () =>{
    setCount(count + 1)
  }

  const reduceValue = () => {
    setCount(count - 1)
  }

//This won't increase count by four because it only update as a batch means update only
//when the function finishes so the previous value will be same for all setCount.

// const add4Value = () => {
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)  

// By defining call back inside method it will take counter value after updating
// so the each callback finishes updating so value changes for each callback
  const add4Value = () => {
    setCount((preValue) => preValue + 1)
    setCount((preValue) => preValue + 1)
    setCount((preValue) => preValue + 1)
    setCount((preValue) => preValue + 1)
  }
  return (
    <>
      <h1>Counter project {count}</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={add4Value}>Add 4 value</button>
      <button onClick={reduceValue}>Reduce value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
