import '../index.scss'
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import variables from '../../../variables.module.scss';

const ExpMulti = () => {
    return (
        <div className='container-all'>
           <Divider className='center'>
                <h3>Multiplayer Experiments</h3>
            </Divider>

            <div className='container-video-text gap'>
                <div>
                    <img src={require('../../../../assets/images/personalproject/multigif.gif')} alt="loading..." className='png-img'/>
                </div>

                <div className='text-container'>
                    <p><b>Theme: </b> Online Multiplayer</p>
                    <p><b>Date: </b> August 2024</p>
                    <p><b>Team:</b> Solo</p>
                    <p><b>Engine and tools:</b> Godot, Amazon Web Service <FontAwesomeIcon icon={faAws} color={variables.tertiarycolor}/>, Aseprite, GDScript</p>
                    <p>
                        Built a 1v1 online multiplayer fighting game.
                        Designed and integrated <b>cloud-based multiplayer</b> services using <em>Amazon Web Services</em> to support session management, and online gameplay synchronization.
                    </p>
                </div>
            </div>

            {/* CODE REFACTORING ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='container-horizontal gap top-separator-small'>
                    <div>
                       <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/bJcxVu-6kLA" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div>
                       <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/KuCmjw5KT-o" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}
export default ExpMulti
