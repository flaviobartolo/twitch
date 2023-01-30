import React from 'react'

import Carousel from 'react-material-ui-carousel'

import Item from './Item'

function FrontpageCarousel() {
  return (
    <Carousel>
      <Item />
      <Item />
      <Item />
    </Carousel>
  )
}

export default FrontpageCarousel