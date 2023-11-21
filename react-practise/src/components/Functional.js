import React, {useState} from "react";

const Functional = () => {

    const [data, setData] = useState("Tarun Kumar")
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>hello world</h1>
            <h2>{data}</h2>
            <button onClick={() => setData("Coder king") }>Change Name</button>
            <h3>{count}</h3>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count -1)}>Decrease</button>
        </>
    )
}
export default Functional