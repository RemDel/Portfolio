import './index.scss';
import '../Project/QuanticDream/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
        emailjs.sendForm('service_vrc3rua', 'template_tji7fpd', refForm.current, 'CXG7jhE8Us8xe6zno')
        .then(
        () => {
            alert('Message successfully sent!');
            window.location.reload(false);
        }, (error) => {
            alert(error.text);
        });
    }

    return (
        <div className='center'>
            <div className='project anim'>
                <h1>
                    <AnimatedLetters    
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>
                    <br />
                </h1>
            </div>

            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input type='subject' name='subject' placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea type='message' name='message' placeholder='Message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button-send' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

export default Contact