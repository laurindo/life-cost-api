import React, { Component } from 'react';

import Carousel from '../../components/Carousel/Carousel';
import CarouselItem from './CarouselItem';

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel
          title={ this.props.title }
        >
          <CarouselItem index={ 1 } />
          <CarouselItem index={ 2 } />
          <CarouselItem index={ 3 } />
          <CarouselItem index={ 4 } />
        </Carousel>
      </div>
    );
  }
}
