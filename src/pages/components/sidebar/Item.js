import React from 'react'

function Item({props}) {
  return (
    <div className='sidebar__item'>
      <figure className='sidebar__avatar-box'>
        <img src={props.streamer_avatar} alt={props.streamer_name} className='sidebar__avatar' />
      </figure>

      <div className='sidebar__info-box'>
        <p className='sidebar__streamer'>{props.streamer_name}</p>
        <p className='sidebar__game'>{props.current_game}</p>
      </div>

      <div className='sidebar__viewers'>
        {props.current_views}
      </div>
    </div>
  )
}

export default Item