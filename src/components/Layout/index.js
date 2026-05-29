import './index.scss';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'
import variables from '../variables.module.scss';


function Sidebar() {
    return (
        <div>
            <div className="nav-bar-left"/>
            <div className="nav-bar-right">
            <nav>
                {}
                <NavLink exact="true" activeclassname="active" to="/Portfolio">
                    <FontAwesomeIcon icon={faHome} color={variables.unhovercolor}/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color={variables.unhovercolor}/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/remi-delauzun'>
                    <FontAwesomeIcon icon={faLinkedin} color={variables.unhovercolor}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/'>
                    <FontAwesomeIcon icon={faItchIo} color={variables.unhovercolor}/>
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