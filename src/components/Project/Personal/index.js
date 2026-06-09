import './index.scss'
import AnimatedLetters from '../../AnimatedLetters';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
//import Divider from '@mui/material/Divider';

const PersonalProject = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P','e','r','s','o','n','a','l',' ','P','r','o','j','e','c','t','s'];
    
    const { state } = useLocation();
    const { targetId } = state || {};

    const menuRef = React.createRef();
    const hudRef = React.createRef();
    const perfRef = React.createRef();

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
        el.scrollIntoView();
        }
    }, [targetId]);


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }, [])

    return (
    <div className='project anim'>
        <h1>
            <AnimatedLetters    
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
            <br />
        </h1>

        <div className="container-video-text margin-qd">
            <div className='text-container'>
                <p><b>Released:</b> Cancelled <em>(6 months Live on Steam)</em></p>
                <p><b>Theme:</b> Competitive MOBA</p>
                <p><b>Studio: </b>
                    <a target="_blank" rel='noreferrer' href='https://www.quanticdream.com/'>Quantic Dream</a>
                    <em> (150 collaborators)</em></p>
                <p><b>Platforms:</b> PC</p>
                <p><b>Time spent on project:</b> ~1.5 years</p>
                <p><b>Engine and tools:</b> In-house Engine, C++</p>
            </div>
        </div>

        <div className='list-contribution'>
            
            <h2>Summary of Contributions</h2>
            <div className="container-list-button">
                <p className='flat-button-project' onClick={() => { menuRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>MENUS</p>
                <p className='flat-button-project' onClick={() => { perfRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>PERFORMANCES</p>
                <p className='flat-button-project' onClick={() => { hudRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>HUD</p>
            </div>
        </div>

        <div className='detail-contribution'>
            <div ref={menuRef}> PROJECT A </div>
            <div ref={perfRef}> PROJECT B </div>
            <div ref={hudRef}> PROJECT C </div>
        </div>
    </div>
    );
}

export default PersonalProject

