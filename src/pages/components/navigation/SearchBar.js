import React from 'react'

import {ReactComponent as Search} from '../../../assets/svg/search.svg'

function SearchBar() {
  return (
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="Search" />
      <button className="search__button">
        <Search className="search__icon" />
      </button>
    </form>
  )
}

export default SearchBar