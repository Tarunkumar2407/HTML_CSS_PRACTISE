import React, {useRef} from 'react'

const UseRef = () => {
    let inputRef = useRef(null)

    const controlInput = () => {
        inputRef.current.value = "abc"
        // inputRef.current.style.color = "red"
        inputRef.current.focus()
    }
  return (
    <div>
      <input type='text' ref={inputRef} ></input>
      <button onClick={controlInput}>Handle Input</button>
    </div>
  )
}

export default UseRef
