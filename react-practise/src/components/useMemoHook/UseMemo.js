import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)
    const multiply =useMemo(() => {
        console.log("multi count")
        return count * 2;
    },[count]) 
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Multiply: {multiply}</h1>
      <h1>Item: {item}</h1>
      <button onClick={() => setCount(count +1)}>Increase count</button>
      <button onClick={() => setItem(item+ 1)}>Increase Items</button>
    </div>
  )
}

export default UseMemo
