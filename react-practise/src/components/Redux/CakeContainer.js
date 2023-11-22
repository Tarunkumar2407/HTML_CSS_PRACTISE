import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from './Action/CakeAction'

const CakeContainer = () => {
    const numOfCakes = useSelector((state)=> state.NoOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{numOfCakes}</h1>
      <button>Buy Cake</button>
      <button onClick={()=> dispatch(buyCake())}>Buy Book</button>
    </div>
  )
}

export default CakeContainer
