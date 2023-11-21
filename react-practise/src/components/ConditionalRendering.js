import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [loggedin, setLoggedin] = useState(false)
  return (
    <div>
      {loggedin ? <h1>Welcome Tarun</h1> : <h1>Welcome User</h1>}
      <button onClick={() => setLoggedin(true)}>Login</button>
    </div>
  )
}

export default ConditionalRendering
