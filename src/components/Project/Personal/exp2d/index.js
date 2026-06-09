import '../index.scss'
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import variables from '../../../variables.module.scss';

const Exp2D = () => {

    return (
        <div className='container-all  top-separator'>
            <Divider className='center'>
                <h3>2D Experiments</h3>
            </Divider>

            <div className='center gap-small'>
                <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/deadinside'>
                Link <FontAwesomeIcon icon={faLink} color={variables.tertiarycolor}/>
                </a>
            </div>

            <div className='container-video-text gap top-separator-small'>
                <div>
                    <div className='center'>  
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/lvsYhzUkRto" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className='text-container'>
                    <p><b>Theme: </b> 2D & Hand drawn</p>
                    <p><b>Date: </b> November 2023</p>
                    <p><b>Team:</b> Solo</p>
                    <p><b>Engine and tools:</b> Godot, Krita, Audacity</p>

                    <p>
                        A minimalist 2D platformer inspired by <a
                        target="_blank" rel='noreferrer' href='https://www.youtube.com/watch?v=6C5fsG0fUoY'>
                        La Linea</a>. Features fully hand-drawn animations and custom-made sound effects. 
                        Players guide a white stickman through maze-like levels, collecting light to reveal the correct path forward.
                    </p>
                </div>
                
                <div className='center'>
                    <img src={require('../../../../assets/images/personalproject/handdrawn2dgif.gif')} alt="loading..." className='png-img-minimap'/>
                </div>
            </div>
            <div className='top-separator'>
                <p>  .  </p>
            </div>
            <div className='top-separator'>
                <p>  .  </p>
            </div>
        </div>
    );
}
export default Exp2D
