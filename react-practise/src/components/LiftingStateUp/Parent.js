import React from 'react'
import Child from './Child'

const Parent = () => {
    const parentAlert = (name) => {
        alert("My name is "+ name)
    }
  return (
    <div>
      <Child data = {parentAlert}/>
    </div>
  )
}

export default Parent
