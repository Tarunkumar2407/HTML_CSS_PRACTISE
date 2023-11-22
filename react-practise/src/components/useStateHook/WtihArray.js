import React, { useState } from 'react'

const WtihArray = () => {
    const [items, setItem] = useState([])
    const handleAdd = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    console.log(items)
  return (
    <div>
      <button onClick={handleAdd}>Add a number</button>
      <ul>
      {
        items.map((item) => {
            return (
                <li key={item.id}>{item.value}</li>
            )
        })
      }
      </ul>
    </div>
  )
}
export default WtihArray
