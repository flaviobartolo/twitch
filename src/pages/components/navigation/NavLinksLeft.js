import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinksLeft() {
  return (
    <ul>
      <NavLink to="#" className='navigation__link'>Following</NavLink>
      <NavLink to="#" className='navigation__link'>Browse</NavLink>
      <NavLink to="#" className='navigation__link'>...</NavLink>
    </ul>
  )
}

export default NavLinksLeft