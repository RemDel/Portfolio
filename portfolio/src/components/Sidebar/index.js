//import { Link } from 'react-router-dom'
//import { Container } from 'react-bootstrap';
import './index.scss'
//import LogoDev from '../../assets/images/gamedevicon5.png'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faItchIo } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} color="#C5A187"/>
        </Link>
        <Link to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#C5A187"/>
        </Link>
        <Link to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#C5A187"/>
        </Link>
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
)

export default Sidebar

/*
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
    </nav>

*/


/*

        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#C5A187"/>
        </NavLink>
        
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#C5A187"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#C5A187"/>
        </NavLink>


*/