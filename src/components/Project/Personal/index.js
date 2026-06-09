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

    const station88 = React.createRef();
    const potionstore = React.createRef();
    const spaceltd = React.createRef();
    const expmulti = React.createRef();
    const exp3d = React.createRef();
    const exp2d = React.createRef();

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
                <p><b>Abstract: </b> 
                Since 2019, I have been developing my skills in video game development through participation in numerous game jams.
                </p>
                <p>
                I began developing with Godot and later explored Unity and Unreal Engine before choosing Godot as my primary engine.
                My first project, <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/saute-tromblon'>Saute-Tromblon</a>
                , was created during a school game jam.
                </p>
                <p> 
                Since then, I have continued to take part in game jams both independently and as part of collaborative teams, 
                gaining experience in <em>rapid prototyping</em>, <em>gameplay programming</em>, and <em>teamwork</em>.
                </p>
                    
                <p><b>Engine and tools:</b> Godot, GDScript, C#, GLSL, Aseprite, AWS (Amazon Web Service)</p>
            </div>
        </div>

        <div className='list-contribution'>
            
            <h2>Summary of Projects</h2>
            <div className="container-list-button">
                <p className='flat-button-project' onClick={() => { station88.current?.scrollIntoView({ behavior: 'smooth' }); }}>Station 88</p>
                <p className='flat-button-project' onClick={() => { potionstore.current?.scrollIntoView({ behavior: 'smooth' }); }}>Magg's potion store</p>
                <p className='flat-button-project' onClick={() => { spaceltd.current?.scrollIntoView({ behavior: 'smooth' }); }}>Space Ltd.</p>
                <p className='flat-button-project' onClick={() => { expmulti.current?.scrollIntoView({ behavior: 'smooth' }); }}>Multiplayer Experiments</p>
                <p className='flat-button-project' onClick={() => { exp3d.current?.scrollIntoView({ behavior: 'smooth' }); }}>3D Experiments</p>
                <p className='flat-button-project' onClick={() => { exp2d.current?.scrollIntoView({ behavior: 'smooth' }); }}>2D Experiments</p>
            </div>
        </div>

        <div className='detail-contribution'>
            <div ref={station88}> station88 </div>
            <div ref={potionstore}> potionstore </div>
            <div ref={spaceltd}> spaceltd </div>
            <div ref={expmulti}> expmulti </div>
            <div ref={exp3d}> exp3d </div>
            <div ref={exp2d}> exp2d </div>
        </div>
    </div>
    );
}

export default PersonalProject

