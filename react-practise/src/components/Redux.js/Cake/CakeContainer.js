import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCakes from './Action/CakeAction'
import buyIcecream from '../IceCream/Action/IceCreamAction'

const CakeContainer = () => {
    const [number, setNumber] = useState(1)
    const NumOfCakes = useSelector(state => state.cake.NumOfCakes)
    const NumOfIceCream = useSelector(state => state.iceCream.NumOfIceCream )
    const dispatch = useDispatch()
  return (
    <div>
      <h2>No. of cakes: {NumOfCakes}</h2>
      <input type='text' onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => dispatch(buyCakes(number))}>Buy {number} Cakes</button>

      <h2>No. of IceCreams: {NumOfIceCream }</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy IceCreams</button>
    </div>
  )
}

export default CakeContainer
