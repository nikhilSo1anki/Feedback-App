import React from 'react'

function Header({headerText}) {

  return (
    <div className="header">
        <span>{headerText}</span>
    </div>
  )
}

export default Header