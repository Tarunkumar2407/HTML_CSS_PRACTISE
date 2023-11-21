import React from 'react'

const PropsChild = ({name, email, data}) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <button onClick={()=> data()}>Call Function</button>
    </div>
  )
}

export default PropsChild
