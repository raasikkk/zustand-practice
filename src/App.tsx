import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return <OtherComponent count={count} increase={increase} decrease={decrease} />
}

type OtherType = {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const OtherComponent = ({ count, increase, decrease }: OtherType) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
