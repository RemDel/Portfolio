import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import WhoAmI from '../WhoAmI';
import React, { useState, useEffect } from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I','\'','m',' ','R','é','m','i',' ','D','e','l','a','u','z','u','n'];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

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
                <h2>Curently UI Developer at Quantic Dream</h2>
                <Link to="/contact" className='flat-button' >CONTACT ME</Link>
                
                <div>
                    <WhoAmI/>
                </div>

                <div className="container button-project">
                    <div>
                        <div className="button-container">
                            <Link to="/project/quanticdream" className='flat-button-project' >Quantic Dream</Link>
                        </div>
                        <div className="button-container">
                            <Link to="/project/quanticdream" className='flat-button-project' >Aviation Civile</Link>
                        </div>
                        <div className="button-container">
                            <Link to="/project/safranaircraftengine" className='flat-button-project' >Safran Aircraft Engine</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home

/*
<div>
    <Link to="/project/quanticdream" className='flat-button-project' >Quantic Dream</Link>
    <Link to="/project/aviationcivile" className='flat-button-project' >Aviation Civile</Link>
    <Link to="/project/safranaircraftengine" className='flat-button-project' >Safran Aircraft Engine</Link>
</div>

*/