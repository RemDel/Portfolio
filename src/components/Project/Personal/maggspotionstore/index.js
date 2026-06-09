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

import CarouselData from "./carouselData";
import Carousel from '../../QuanticDream/Carousel';

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

const MaggsPotionStore = () => {
    const [qvalue, qsetValue] = React.useState(0);
    const qhandleChange = (event, newValue) => {
        qsetValue(newValue);
    };

    return (
        <div className='container-all'>
            <Divider className='center'>
                <h3>Magg's Potion Store</h3>
            </Divider>
            
            <div className='center gap-small'>
                <p><em>Magg, a young lady has just taken over her aunt's potion store. 
                    She's trying to improve the store's reputation, despite a nasty situation...</em></p>
                <a target="_blank" rel='noreferrer' href='https://demi-lune-azur.itch.io/maggs-potion-store'>
                Link <FontAwesomeIcon icon={faLink} color={variables.tertiarycolor}/>
                </a>
            </div>

            
            <div className='container-horizontal gap top-separator-small'>
                <div>
                    <img src={require('../../../../assets/images/personalproject/magg0.png')} alt="loading..." className='png-img-crop'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>From prototype...</em></h5>
                    </div>
                </div>
                <div>
                    <img src={require('../../../../assets/images/personalproject/magg1.png')} alt="loading..." className='png-img-crop'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>...to polished final result</em></h5>
                    </div>
                </div>
                
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}
            <div className='container-video-text gap'>
                <div>
                    <div className='center'>  
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={qvalue} textColor="secondary" indicatorColor="secondary" onChange={qhandleChange} aria-label="basic tabs example">
                            <Tab label="Polished" {...a11yProps(0)} />
                            <Tab label="Prototype" {...a11yProps(1)} />
                            <Tab label="Menu" {...a11yProps(2)} />
                        </Tabs>
                        </Box>
                    </div>
                    <div className='center'>  
                        <CustomTabPanel value={qvalue} index={0}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/ojlsXDFhEu0" title="Trailer Video" frameBorder="0" 
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
                                src="https://www.youtube.com/embed/9WDHxGJXNgg" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={qvalue} index={2}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304"
                                src="https://www.youtube.com/embed/pppJnfsNaCM" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                    </div>
                </div>

                <div className='text-container'>
                    <p><b>Game Jam:</b> PS#15 </p>
                    <p><b>Theme: </b> Shadow & Alchemy</p>
                    <p><b>Date: </b> July 2024</p>
                    <p><b>Team:</b> Solo</p>
                    <p><b>Time Limit:</b> Two weeks</p>
                    <p><b>Engine and tools:</b> Godot, Aseprite, Krita, PureRef, GDScript</p>

                    <p>
                        This is an action-platformer game. The goal is to brew potions for ordinary customers; 
                        or to poison them and then deliver their bodies to the customers who ordered them.
                    </p>
                </div>
            </div>

            
            <div>
                <div className='center gap-small'>
                    <a target="_blank" rel='noreferrer' href='https://docs.google.com/document/d/1LRr3ssfzGd1Wc_hswwWTmub54GAytJc-QY2eNTPJpvY/edit?usp=sharing'>
                    Game Design Document Link <FontAwesomeIcon icon={faLink} color={variables.tertiarycolor}/>
                    </a>
                </div>

                <div className='carousel-display top-separator-small'>
                    <div className='center top-separator-small'>
                        <div className='center'>
                            <Carousel data={CarouselData} />
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}
export default MaggsPotionStore
