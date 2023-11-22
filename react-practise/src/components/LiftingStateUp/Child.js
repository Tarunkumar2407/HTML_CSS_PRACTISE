import React from 'react'

const Child = ({data}) => {
    const name = "Tarun"
  return (
    <div>
      <button onClick={() => data(name)}>Call Function</button>
    </div>
  )
}

export default Child
