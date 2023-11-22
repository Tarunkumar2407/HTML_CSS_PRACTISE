import React, { useContext } from 'react'
import { data1, data2 } from './PropsParent'

const ChildC = () => {
    const name = useContext(data1)
    const email = useContext(data2)
  return (
    <div>
        <h1>My name is {name} and my email is {email}</h1>
    </div>
  )
}

export default ChildC
