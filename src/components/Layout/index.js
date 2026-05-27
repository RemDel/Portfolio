import './index.scss';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'


function Sidebar() {
    return (
        <div>
            <div className="nav-bar-left"/>
            <div className="nav-bar-right">
            <nav>
                {}
                <NavLink exact="true" activeclassname="active" to="/home">
                    <FontAwesomeIcon icon={faHome} color="#C5A187"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#C5A187"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/remi-delauzun'>
                    <FontAwesomeIcon icon={faLinkedin} color="#C5A187"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/'>
                    <FontAwesomeIcon icon={faItchIo} color="#C5A187"/>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}


function Layout() {
    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default Layout

/*

<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#C5A187"/>
                </NavLink>

*/