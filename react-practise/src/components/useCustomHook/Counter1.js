import React from 'react'
import useCounter from './UseCounter'

const Counter1 = () => {
    const [count, increment, decrement] = useCounter()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default Counter1
