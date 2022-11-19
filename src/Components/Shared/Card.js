import React from 'react'

function Card({children,isReverse}) {

  return (
    <div className={`card`}>{children}</div>
  )
}

export default Card