import React from 'react'

import './css/Navigation.css'

function Header(props) {
  return (
    <header className='header'>
      {props.children}
    </header>
  )
}

export default Header