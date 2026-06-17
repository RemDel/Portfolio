import './index.scss';

import React, { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters';
import WhoAmI from '../WhoAmI';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I','\'','m',' ','R','é','m','i',' ','D','e','l','a','u','z','u','n'];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']
    //const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }, [])
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}`}>i,</span>
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}/>
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={15}/>

                </h1>
                <h2>Curently UI Developer at <a target="_blank" rel='noreferrer' href='https://www.quanticdream.com/'>Quantic Dream</a></h2>
                
                <div>
                    <WhoAmI/>
                </div>

                <div className="container button-project">
                    <div>
                        <Link to="/project/quanticdream" className='flat-button-project' >Quantic Dream</Link>
                        <Link to="/project/aerospace" className='flat-button-project' >Aerospace</Link>
                        <Link to="/project/personalprojects" className='flat-button-project' >Personal Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home