import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case "Increment": return state + 1;
        case "Decrement": return state - 1;
        default : return state;
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
  return (

    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("Increment")}>Increase</button>
      <button onClick={() => dispatch("Decrement")}>Decrease</button>
    </div>
  )
}

export default UseReducer
