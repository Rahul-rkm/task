import React from 'react'

function NavItem({icon, text, collapse}) {
  return (
    <div className='nav-item'>
        <img src={icon} alt='icon' className='nav-item-icon' />
        <div className={`nav-item-text ${collapse && `hidden`}`}>{text}</div>
    </div>
  )
}

export default NavItem