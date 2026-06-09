import '../index.scss'
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import variables from '../../../variables.module.scss';

const Station88 = () => {
    return (
        <div className='container-all'>
            <Divider className='center'>
                <h3>Station 88</h3>
            </Divider>
            
            <div className='center gap-small'>
                <p><em>Play as a satellite technician operating a control room station. </em></p>
                <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/station88'>
                Link <FontAwesomeIcon icon={faLink} color={variables.tertiarycolor}/>
                </a>
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className="container-video-text margin-qd gap">
                    <div className="video-border ratio ratio-16x9">
                        <iframe 
                            width="560" 
                            height="304" 
                            src="https://www.youtube.com/embed/lA-ivDNku5g" title="Trailer Video" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='text-container'>
                        <p><b>Game Jam:</b> LUDUM DARE 59</p>
                        <p><b>Theme: </b> Signal</p>
                        <p><b>Team:</b> 3 Collaborators</p>
                        <p><b>Time Limit:</b> 72 hours</p>
                        <p><b>Engine and tools:</b> Godot, Git, Miro, Blender, C#, GLSL</p>

                        <p>
                            Adjust satellite antennas to intercept and decode transmissions from spacecraft and satellites 
                            using a suite of signal-processing machines, then respond to incoming communications in real time.
                        </p>
                    </div>
                </div>
              

                <div className='container-horizontal gap top-separator-small'>
                    <div>
                        <img src={require('../../../../assets/images/personalproject/station88_mb.png')} alt="loading..." className='png-img-crop'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Moodboard</em></h5>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/personalproject/station88_pm.jpg')} alt="loading..." className='png-img-crop'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Post-mortem analysis</em></h5>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/personalproject/station88_0.png')} alt="loading..." className='png-img-crop'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Final result</em></h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Station88
