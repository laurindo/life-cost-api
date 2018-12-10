import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Item = styled.div`
  background: #ffffff;
  text-align: center;
  padding: 50px;
  color: white;
  box-shadow: #e3e7ef 0px 6px 12px 0px;
  border-radius: 10px;
`

function CarouselItem(props) {
  return (
    <Item>Item {props.index} of {props.numSlides}</Item>
  )
}

CarouselItem.propTypes = {
  index: PropTypes.number,
  numSlides: PropTypes.number
}

export default CarouselItem
