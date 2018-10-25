import React from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';
import LogoClean from '../img/logo-clean.png'
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className= "nav-container" expand="md">
          <a href="/"><img src={LogoClean} alt="logo" className="logo"/></a>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
              </NavItem>
              <NavItem>
                <Link to="/investment" className="nav-link">INVESTMENT</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;