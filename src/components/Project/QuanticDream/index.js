import './index.scss'
import AnimatedLetters from '../../AnimatedLetters';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
//import Divider from '@mui/material/Divider';
import Video from '../../Video';
import Menus from './Menus';
import HUD from './HUD';
import Performances from './Performances';

const QuanticDream = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S','p','e','l','l','c','a','s','t','e','r','s',' ','C','h','r','o','n','i','c','l','e','s'];
    
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
            <div className='video-container'>
                <Video />
            </div>
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
            <div ref={menuRef}> <Menus /> </div>
            <div ref={perfRef}> <Performances /> </div>
            <div ref={hudRef}> <HUD /> </div>
        </div>
    </div>
    );
}

export default QuanticDream


/*


        <div className='description'>
            <h4>
                Designed and integrated an in-game storefront supporting cosmetic purchases, virtual currency transactions, and LiveOps content updates.
                The shop supported purchases using in-game currency (Elder Gold) as well as premium currency acquisition through the Steam overlay payment flow.
                <br /><br />
                The interface was structured to support scalable catalog updates and future monetization features without requiring major UI refactors.
                <br /><br />
                Key contributions:<br />
                * Storefront UI architecture<br />
                * Steam overlay purchase integration<br />
                * Virtual currency workflows<br />
                * Live content support<br />
                * Scalable shop category structure<br />
                <br />
                Result: Delivered a flexible monetization framework supporting ongoing content releases.

            </h4>
        </div>

        <div className='description'>
            <h4>
                Designed and integrated an in-game storefront supporting cosmetic purchases, virtual currency transactions, and LiveOps content updates.
                The shop supported purchases using in-game currency (Elder Gold) as well as premium currency acquisition through the Steam overlay payment flow.
                <br /><br />
                The interface was structured to support scalable catalog updates and future monetization features without requiring major UI refactors.
                <br /><br />
                Key contributions:<br />
                * Storefront UI architecture<br />
                * Steam overlay purchase integration<br />
                * Virtual currency workflows<br />
                * Live content support<br />
                * Scalable shop category structure<br />
                <br />
                Result: Delivered a flexible monetization framework supporting ongoing content releases.

            </h4>
        </div>

        <div className='description'>
            <h4>
                Designed and integrated an in-game storefront supporting cosmetic purchases, virtual currency transactions, and LiveOps content updates.
                The shop supported purchases using in-game currency (Elder Gold) as well as premium currency acquisition through the Steam overlay payment flow.
                <br /><br />
                The interface was structured to support scalable catalog updates and future monetization features without requiring major UI refactors.
                <br /><br />
                Key contributions:<br />
                * Storefront UI architecture<br />
                * Steam overlay purchase integration<br />
                * Virtual currency workflows<br />
                * Live content support<br />
                * Scalable shop category structure<br />
                <br />
                Result: Delivered a flexible monetization framework supporting ongoing content releases.

            </h4>
        </div>

        <section id='section2'>
            <div className='description'>
                <h4>
                    Designed and integrated an in-game storefront supporting cosmetic purchases, virtual currency transactions, and LiveOps content updates.
                    The shop supported purchases using in-game currency (Elder Gold) as well as premium currency acquisition through the Steam overlay payment flow.
                    <br /><br />
                    The interface was structured to support scalable catalog updates and future monetization features without requiring major UI refactors.
                    <br /><br />
                    Key contributions:<br />
                    * Storefront UI architecture<br />
                    * Steam overlay purchase integration<br />
                    * Virtual currency workflows<br />
                    * Live content support<br />
                    * Scalable shop category structure<br />
                    <br />
                    Result: Delivered a flexible monetization framework supporting ongoing content releases.

                </h4>
            </div>
        </section>

*/