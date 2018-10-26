import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Elif5 from '../img/elif5.jpg';
import Elif2 from '../img/elif2.jpg';
import Elif3 from '../img/elif3.jpg';
import Elif4 from '../img/elif4.jpg';


class CarouselImg extends Component {
    render() {
        return (
            <Carousel
            showArrows={false}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showThumbs={false}
            useKeyboardArrows={true}
            >
                <div>
                    <img src={Elif5} alt="carousel"/>
                </div>
                <div>
                    <img src={Elif2} alt="carousel"/>
                </div>
                <div>
                    <img src={Elif3} alt="carousel"/>
                </div>
                <div>
                    <img src={Elif4} alt="carousel"/>
                </div>
            </Carousel>
        );
    }
}

export default CarouselImg;