import React, { memo } from 'react'

const ChildCallback = ({learning}) => {
    console.log("child component")
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildCallback)
