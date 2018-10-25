import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    // CarouselIndicators,
  } from 'reactstrap';
  import Elif5 from '../img/elif5.jpg';
  import Elif2 from '../img/elif2.jpg';
  import Elif3 from '../img/elif3.jpg';
  import Elif4 from '../img/elif4.jpg';

  const items = [
    {
      src: Elif5,
      altText: 'elif5',
    },
    {
      src: Elif2,
      altText: 'elif2',
    },
    {
      src: Elif3,
      altText: 'elif3',
    },
    {
      src: Elif4,
      altText: 'elif4',
    }
  ];


  class CarouselImg extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem

            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} className="home-carousel"/>
          </CarouselItem>
        );
      });
  
      return (
        <Carousel
        className="carousel-arrows"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }
  
  export default CarouselImg;