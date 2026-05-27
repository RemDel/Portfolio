import LogoTitle from '../../assets/images/sublogo1.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={ LogoTitle } alt="developer" />
                RDL
                <br />
                developer
                </h1>
                <h2> UI Developer / C / C++ / C#</h2>
                <Link to="/contact" className='flat-button' >CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home