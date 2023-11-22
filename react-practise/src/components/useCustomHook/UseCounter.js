import React, {useState} from 'react'

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    return [count, increment, decrement]
}

export default useCounter
