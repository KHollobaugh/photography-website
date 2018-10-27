import {Link} from 'react-router-dom';
import React from 'react';
import LogoClean from '../img/logo-clean.png';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <section className= "nav-container">
          <a href="/" className="logo-bar"><img src={LogoClean} alt="logo" className="logo"/></a>
            <div className="ml-auto">
              <div>
                <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
              </div>
              <div>
                <Link to="/investment" className="nav-link">INVESTMENT</Link>
              </div>
              <div>
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Navigation;