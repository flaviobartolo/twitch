import React from 'react'

import { NavLink } from 'react-router-dom'

import Header from './Header'
import SearchBar from './SearchBar'

import {ReactComponent as Logo} from '../../../assets/svg/twitch.svg'
import {ReactComponent as Star} from '../../../assets/svg/star.svg'
import {ReactComponent as Inbox} from '../../../assets/svg/inbox.svg'
import {ReactComponent as Chat} from '../../../assets/svg/chat_bubble_outline.svg'
import {ReactComponent as Profile} from '../../../assets/svg/person_outline.svg'


function Navigation() {
  return (
    <>
      <Header>
        <nav className='navigation'>
          <div className='navigation__left'>
            <Logo className='navigation__logo' />
            <NavLink to="#" className='navigation__link'>Following</NavLink>
            <NavLink to="#" className='navigation__link'>Browse</NavLink>
            <NavLink to="#" className='navigation__link'>...</NavLink>
          </div>
          <SearchBar />
          <div className='navigation__right'>
            <div className='navigation__icon-box'><Star className='navigation__icon'/></div>
            <div className='navigation__icon-box'><Inbox className='navigation__icon'/></div>
            <div className='navigation__icon-box'><Chat className='navigation__icon'/></div>
            <div className='navigation__profile-box'><Profile className='navigation__icon' /></div>
          </div>
        </nav>
      </Header>
    </>
  )
}

export default Navigation