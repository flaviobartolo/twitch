import React from 'react'

import Header from './Header'
import Logo from './Logo'
import NavLinksLeft from './NavLinksLeft'
import SearchBar from './SearchBar'
import NavLinksRight from './NavLinksRight'
import ProfileMenu from './ProfileMenu'

import './css/Navigation.css'

function Navigation() {
  return (
    <>
      <Header>
        <Logo />
        <NavLinksLeft />
        <SearchBar />
        <NavLinksRight />
        <ProfileMenu />
      </Header>
    </>
  )
}

export default Navigation