import React, {useCallback, useState} from 'react'
import ChildCallback from './ChildCallback'

const ParentCallback = () => {
    const [count , setCount] = useState(0)
    const [add , setAdd] = useState(0)

    const learning = useCallback(() => {

    }, [count])
  return (
    <div>
      <ChildCallback func = {learning}/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <h1>{add}</h1>
      <button onClick={() => setAdd(count + 1)}>Update Add</button>
    </div>
  )
}

export default ParentCallback
