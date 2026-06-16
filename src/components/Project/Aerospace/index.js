import '../Personal/index.scss'
import AnimatedLetters from '../../AnimatedLetters';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import Spad from './spad';
import Elvira from './elvira';

const Aerospace = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','e','r','o','s','p','a','c','e'];
    
    const { state } = useLocation();
    const { targetId } = state || {};

    const spad = React.createRef();
    const elvira = React.createRef();

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
                Software Engineer experienced in developing, maintaining, and enhancing mission-critical applications within 
                aerospace and air traffic management environments. 
                Contributed to the full software lifecycle, from development and testing to deployment and support.
                </p>
                    
                <p><b>Languages:</b> C, C++, JavaScript, TypeScript, HTML, CSS, Python</p>
                <p><b>Frameworks:</b> Qt, Anuglar, Node.Js, Vue.Js</p>
                <p><b>Intégration:</b> Git, Jira, TortoiseSVN</p>
            </div>
        </div>

        <div className='list-contribution'>
            
            <h2>Summary of Projects</h2>
            <div className="container-list-button">
                <p className='flat-button-project' onClick={() => { elvira.current?.scrollIntoView({ behavior: 'smooth' }); }}>ATM</p>
                <p className='flat-button-project' onClick={() => { spad.current?.scrollIntoView({ behavior: 'smooth' }); }}>SPAD M88</p>
            </div>
        </div>

        <div className='detail-contribution'>
            <div ref={elvira}> <Elvira /> </div>
            <div ref={spad}> <Spad /> </div>
        </div>
    </div>
    );
}

export default Aerospace

