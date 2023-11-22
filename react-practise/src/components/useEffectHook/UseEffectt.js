import React, { useEffect, useState } from 'react'

const UseEffectt = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        },1000)
        return () => clearTimeout(timer)
    },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffectt
