import { useState } from 'react';

const App = () => {
  // useState returns an array of two elements
  // 1. Actual variable with initial state
  // 2. function that changes state
  const [inputType, setInputType] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    let result = !inputType
    setInputType(result)
    console.log(result)
  }

  return (
    <>
      <h1>State Demo</h1>
      <form action="">
        <label htmlFor="">Password:
          <input type={inputType ? "text" : "password"}/>
        </label>
        <button onClick={handleClick}>Show / Hide</button>
      </form>
    </>
  )
}

export default App