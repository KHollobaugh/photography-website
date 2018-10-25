import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return(
            <div className="side-bar">
            <h4>Nav</h4>
            <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/investment">Investment</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
    )
}

export default SideBar;