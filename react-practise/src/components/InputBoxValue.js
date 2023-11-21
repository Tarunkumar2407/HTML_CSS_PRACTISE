import React, { useState } from 'react'

const InputBoxValue = () => {
    const [data, setData] = useState("")
    const [print, setPrint] = useState(false)
  return (
    <div>
      {
        print ? <h1>{data}</h1> : null
      }
      <input type='text' onChange={(e) => setData(e.target.value)}></input>
      <button onClick={() => setPrint(!print)}>Print/Show Data </button>
    </div>
  )
}

export default InputBoxValue
