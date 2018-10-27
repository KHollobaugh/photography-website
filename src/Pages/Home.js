import CarouselImg from '../components/Carousel';
import React from 'react';
import { Parallax } from 'react-parallax';
import SideBar from '../components/SideBar';
import Portrait from '../img/elif-portrait-1.png'
import Photoshoot1 from '../img/photoshoot1.png'


const Home = () => {
    return(
        <div>
            {/* <Navigation /> */}

            <Parallax
            bgImage={require('../img/foliage.jpg')}
            bgImageAlt="foliage"
            strength={200}>
            <div style={{ height: '100vh', width: 'auto', background:'rgba(255,255,255, 0.2)'}} />
            </Parallax>

            <div className="home-header-container">
            <div className="header-text">
                <h2>Welcome</h2>
                <p>If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. This is a happy place, little squirrels live here and play.</p>
            </div>
            <img src={Portrait} alt="self-portrait" />
            </div>


            <SideBar/>


            <div className="home-quote">
            <div className="quote-text">
                <h2>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</h2>
                <h3>Aaron Siskind</h3>
            </div>
            <img src={Photoshoot1} alt="home-page" />
            </div>


            <div className="home-center-div">

            <CarouselImg />               

            <ul className="home-tags">
                <li className="joyful">Joyful,</li>
                <li className="artistic">Artistic,</li>
                <li className="genuine">Genuine.</li>
            </ul>
            </div>

            <div className="home-bottom-img">
            <Parallax
            className="parallax"
            bgImage={require('../img/bouquet.jpg')}
            bgImageAlt="rust"
            strength={200}>
            <div style={{ height: '100vh', width: 'auto'}} />
            </Parallax>
            </div>


            <div className="home-page-footer">
            <h2>Section</h2>
            <p>With something so strong, a little bit can go a long way. Let's put some highlights on these little trees. The sun wouldn't forget them. And maybe, maybe, maybe... Isn't that fantastic? You can just push a little tree out of your brush like that. Volunteering your time; it pays you and your whole community fantastic dividends. A little happy sunlight shining through there.</p>
            </div>


            {/* <Copyright /> */}
        </div>
    )
}

export default Home;