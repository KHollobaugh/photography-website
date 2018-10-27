import React from 'react';
import { Parallax } from 'react-parallax';


const Investment = () => {
    return(
        <div className="investment-page">

            <Parallax
            className="parallax"
            bgImage={require('../img/mackinac.jpg')}
            bgImageAlt="mackinac bridge"
            strength={200}>
            <div style={{ height: '500px', width: 'auto', background:'rgba(255,255,255, 0.2)'}} />
            </Parallax>
        <div className="investment-header">
        <h1>Investment</h1>
        </div>

        <div className="price-boxes">

        <div className="box">
        <h2>Headshot</h2>
        <h4>$150</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>

        <div className="box">
        <h2>Portrait</h2>
        <h4>$250</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>

        <div className="box">
        <h2>Deluxe Portrait</h2>
        <h4>$350</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>

        <div className="box">
        <h2>Event Basic</h2>
        <h4>$650</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>

        <div className="box">
        <h2>Event Standard</h2>
        <h4>$800</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>

        <div className="box">
        <h2>Wedding Deluxe</h2>
        <h4>$1000</h4>
        <p>Anytime you learn something your time and energy are not wasted. Everything's not great in life, but we can still find beauty in it. Mountains are so simple, they're hard.</p>
        </div>
        
        </div>
        </div>
    )
}

export default Investment;