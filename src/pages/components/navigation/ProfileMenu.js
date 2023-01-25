import React from 'react'

import {ReactComponent as Profile} from '../../../assets/svg/person_outline.svg'

function ProfileMenu() {
  return (
    <div className='navigation__profile'><Profile className='navigation__profileicon' /></div>
  )
}

export default ProfileMenu