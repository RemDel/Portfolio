import './index.scss'
import AnimatedLetters from '../../AnimatedLetters';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import Video from '../../Video';

const QuanticDream = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['Q','u','a','n','t','i','c',' ','D','r','e','a','m'];
    
    const { state } = useLocation();
    const { targetId } = state || {};

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
    <div className='project'>
        <h1>
            <AnimatedLetters    
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
            <br />
        </h1>

        <div className='video'>
            <Video/>
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
    </div>
    );
}

export default QuanticDream
