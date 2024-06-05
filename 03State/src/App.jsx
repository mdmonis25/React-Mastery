import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }
  const subValue = () => {
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
  }

  return (
    <>
    <h1>Monis ka Counter</h1>
    <h2>Counter : {count}</h2>
    <button onClick={addValue}>Add Value</button> {"      "}
    <button onClick={subValue}>Subract Value</button>
    </>
  )
}

export default App
