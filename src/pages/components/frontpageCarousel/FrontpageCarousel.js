import React from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Item from './Item'

function FrontpageCarousel() {
  return (
    <>
      <FaChevronLeft className='frontpageCarousel__icon' />
      <div className='frontpageCarousel__content'>
        <Item className='frontpageCarousel__video frontpageCarousel__video-tl' />
        <Item className='frontpageCarousel__video frontpageCarousel__video-sl' />
        <Item className='frontpageCarousel__video frontpageCarousel__video-main' />
        <Item className='frontpageCarousel__video frontpageCarousel__video-sr' />
        <Item className='frontpageCarousel__video frontpageCarousel__video-tr' />
      </div>
      <FaChevronRight className='frontpageCarousel__icon' />
    </>
  )
}

export default FrontpageCarousel