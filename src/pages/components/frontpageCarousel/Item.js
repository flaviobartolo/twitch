import React from 'react'

import placeholder from '../../../assets/img/carousel_placeholder.jpg'

function Item(props) {

  console.log(props)

  return (
    <>
      <div className={props.className}><img src={placeholder} alt='img' /></div>
    </>
  )
}

export default Item