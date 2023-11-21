import React from 'react'

const ClickEvent = () => {

    const clickEvent = () => {
        alert("hi i am clicked")
    }
  return (
    <div>
      <button onClick={() => clickEvent()}>Click Me</button>
    </div>
  )
}

export default ClickEvent
