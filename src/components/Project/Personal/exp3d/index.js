import '../index.scss'
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import variables from '../../../variables.module.scss';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Exp3D = () => {
    const [qvalue, qsetValue] = React.useState(0);
    const qhandleChange = (event, newValue) => {
        qsetValue(newValue);
    };

    return (
        <div className='container-all  top-separator'>
            <Divider className='center'>
                <h3>3D Experiments</h3>
            </Divider>

            <div className='center gap-small'>
                <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/winning-by-dying-2'>
                Link <FontAwesomeIcon icon={faLink} color={variables.tertiarycolor}/>
                </a>
            </div>

            <div className='container-video-text gap'>
                <div>
                    <div className='center'>  
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={qvalue} textColor="secondary" indicatorColor="secondary" onChange={qhandleChange} aria-label="basic tabs example">
                            <Tab label="NavMesh" {...a11yProps(0)} />
                            <Tab label="Character Controller" {...a11yProps(1)} />
                        </Tabs>
                        </Box>
                    </div>
                    <div className='center'>  
                        <CustomTabPanel value={qvalue} index={0}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/CFJ2eM0S1rg" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={qvalue} index={1}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/cTlp1FRtuc8" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                    </div>
                </div>

                <div className='text-container'>
                    <p><b>Theme: </b> Portals & Shaders</p>
                    <p><b>Date: </b> Mars 2026</p>
                    <p><b>Team:</b> Solo</p>
                    <p><b>Engine and tools:</b> Godot, Blender, GLSL</p>

                    <p>
                        A small 3D experimentation project inspired by the cozy rendering style of <a 
                        target="_blank" rel='noreferrer' href='https://ashorthike.com/'>
                        A Short Hike</a> and the isometric movement design of <a 
                        target="_blank" rel='noreferrer' href='https://tunicgame.com/'>
                        TUNIC</a>. 
                        I wanted to explore how stylized visuals, camera perspective, and responsive movement could create a relaxing yet immersive gameplay experience.
                    </p>
                </div>
                
                <div className='center'>
                    <img src={require('../../../../assets/images/personalproject/3dexp.gif')} alt="loading..." className='png-img-minimap'/>
                </div>
            </div>

            <div className='center gap-small'>
                <p><em>Below is another 3D experiment featuring <b>portals</b> inspired by various concept art and the animated film "
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/watch?v=9KD4DQ0ABvI'>
                Suzume
                </a>"</em></p>
            </div>
                
            <div className='container-video-text gap'>
                <div className='center'>  
                    <div className="video-border ratio ratio-16x9">
                        <iframe 
                            width="560" 
                            height="304"
                            src="https://www.youtube.com/embed/D8ccnUakw8w" title="Trailer Video" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className='text-container'>
                    <p><b>Theme: </b> Portals and Shaders</p>
                    <p><b>Date: </b> September 2024</p>
                    <p><b>Team:</b> Solo</p>
                    <p><b>Engine and tools:</b> Godot, Blender, GLSL</p>
                    
                    <div className='center'>
                        <img src={require('../../../../assets/images/personalproject/suzume.gif')} alt="loading..." className='gif-suzume'/>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Exp3D
