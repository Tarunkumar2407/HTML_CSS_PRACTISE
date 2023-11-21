import React from 'react'
import PropsChild from './PropsChild'

const PropsParent = () => {
    const func = () => {
        alert("I am from Parent")
    }
  return (
    <div>
      <PropsChild name= {"Tarun"} email={"tarunkumar@gmail.com"} data = {func}/>
    </div>
  )
}

export default PropsParent
