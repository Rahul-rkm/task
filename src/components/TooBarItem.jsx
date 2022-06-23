import React from 'react'

function TooBarItem({source, text, toggler}) {
  return (
    <div onClick={toggler} className='toolbar-item'>
          <img src={source} alt={text} className='tool-bar-icon'/>
    </div>
  )
}

export default TooBarItem