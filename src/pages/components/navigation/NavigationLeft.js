import React from 'react'

import {ReactComponent as Logo} from '../../../assets/svg/twitch.svg'
import NavLinksLeft from './NavLinksLeft'

function NavigationLeft() {
  return (
    <div className='navigation__left'>
      <Logo className='navigation__logo' />
      <NavLinksLeft />
    </div>
  )
}

export default NavigationLeft