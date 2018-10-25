import React from 'react';
import SideBar from '../components/SideBar';
import imgData from '../data/photos';
import { Parallax } from 'react-parallax';


class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: imgData
        }
    }

    render() {
        return(
            <div>
            <Parallax
            bgImage={require('../img/wildflowers.jpg')}
            bgImageAlt="foliage"
            strength={200}>
            <div style={{ height: '400px', width: 'auto', background:'rgba(255,255,255, 0.2)'}} />
            </Parallax>
                <div className="portfolio-header">
                <h1>Previous Work</h1>
                </div>

                <div className="portfolio-container">
                <div className="photo-section">
                {this.state.photos.map((item, index) => 
                    <div className="photo" key={index}>
                    <img src={item.img} alt="portfolio"/>
                    </div>
                )} 
                </div>
                <SideBar />
                </div>
            </div>
        )
    }
}

export default Portfolio;