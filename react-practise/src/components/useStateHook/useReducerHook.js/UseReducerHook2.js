import React, { useReducer } from 'react'


const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer = (state, action) => {
  switch(action.type){
    case "increment": return {...state, firstCounter: state.firstCounter + action.value}
    case "decrement": return {...state, firstCounter: state.firstCounter - action.value}
    case "increment": return {...state, secondCounter: state.secondCounter + action.value}
    case "decrement": return {...state, secondCounter: state.secondCounter - action.value}
    default: return state;
  }
}
const UseReducerHook2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <h1>{count.secondCounter}</h1>
      <button onClick={()=> dispatch({type: "increment", value: 1})}>Increment Counter1 </button>
      <button onClick={() => dispatch({type: "decerement", value: 1})}>Decrement Counter1 </button>
      <button onClick={() => dispatch({type: "increment", value: 5})}>Increment Counter2 </button>
      <button onClick={() => dispatch({type: "decrement", value: 5})}>Decrement Counter2 </button>
    </div>
  )
}

export default UseReducerHook2

