import React from 'react'

import Item from './Item'

import { DUMMY_DATA } from './sidebar_DUMMY_DATA'

function SideBar() {

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>For You</h2>
      <div className='sidebar__followed-box'>
        <h3 className='sidebar__subtitle'>Followed Channels</h3>
        {DUMMY_DATA.map((e) => <Item key={e.id} props={e} />)}
      </div>
      <div className='sidebar__recommended-box'>
        <h3 className='sidebar__subtitle'>Recommended Channels</h3>
        {DUMMY_DATA.map((e) => <Item key={e.id} props={e} />)}
      </div>
    </div>
  )
}

export default SideBar