import React from 'react'

import Header from './Header'
import NavigationLeft from './NavigationLeft'
import SearchBar from './SearchBar'
import NavigationRight from './NavigationRight'

function Navigation() {
  return (
    <>
      <Header>
        <NavigationLeft />
        <SearchBar />
        <NavigationRight />
      </Header>
    </>
  )
}

export default Navigation