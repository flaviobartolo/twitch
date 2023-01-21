import React from 'react'

import './css/Navigation.css'

function Header(props) {
  return (
    <header className='header'>
      <nav className='navigation'>
        {props.children}
      </nav>
    </header>
  )
}

export default Header