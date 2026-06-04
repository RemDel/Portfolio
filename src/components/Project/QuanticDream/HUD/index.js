import '../Menus/index.scss';
import Divider from '@mui/material/Divider';
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

const HUD = () => {
    const [qvalue, qsetValue] = React.useState(0);
    const qhandleChange = (event, newValue) => {
        qsetValue(newValue);
    };
    
return (
    <div className='container-all'>
            <Divider className='center'>
                <h2>HUD</h2>
            </Divider>
            

            {/* MINIMAP ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>MINIMAP</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Complete re-coding of the minimap interface.</em></p>
                </div>
                
                <div className='container-video-text'>
                    <div>
                        <div className='center'>  
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={qvalue} textColor="secondary" indicatorColor="secondary" onChange={qhandleChange} aria-label="basic tabs example">
                                <Tab label="Before Revamp" {...a11yProps(0)} />
                                <Tab label="Design mockup" {...a11yProps(1)} />
                                <Tab label="Final Result" {...a11yProps(2)} />
                            </Tabs>
                            </Box>
                        </div>
                        <div className='center'>  
                            <CustomTabPanel value={qvalue} index={0}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304"
                                    src="https://www.youtube.com/embed/CR74Bop4TwE" title="Trailer Video" frameBorder="0" 
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
                                    src="https://www.youtube.com/embed/2vMfbKbJloI" title="Trailer Video" frameBorder="0" 
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
                                    src="https://www.youtube.com/embed/VC_hvdOs__o" title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                        </div>
                    </div>

                    <div>
                        <p>Implemented minimap marker system with context-sensitive visual feedback</p>
                        <ul>
                        <li><h4><b>Chest</b> — Static marker</h4></li>
                        <li><h4><b>Spellcaster</b> — Static marker</h4></li>
                        <li><h4><b>Summons & Buildings</b> — Static marker</h4></li>
                        <li><h4><b>Titan</b> — Spawn animation</h4></li>
                        <li><h4><b>Ping</b> — Spawn animation</h4></li>
                        <li><h4><b>Lifestone</b> — Hit and death animations</h4></li>
                        <li><h4><b>Node</b> — Capture animations for Ally, Enemy, and Neutral</h4></li>
                        </ul>
                    </div>
                </div>

                <div className='container-horizontal gap top-separator-small'>
                    <div>
                        <img src={require('../../../../assets/images/minimap/minimapMarkers.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Mockup designed by a UX/UI designer</em></h5>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/minimap/markerTitans.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Minimap Titan marker mockup</em></h5>
                        </div>
                    </div>

                    <div>
                        <img src={require('../../../../assets/images/minimap/MinimapBefore.gif')} alt="loading..." className='png-img-minimap'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Original minimap before revamp</em></h5>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/minimap/Minimap.gif')} alt="loading..." className='png-img-minimap'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Final Minimap Implemented</em></h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* LEVEL UP ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>LEVEL UP</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Reorganized the UI data architecture by separating resources into dedicated runtime categories based on game flow states.</em></p>
                </div>

            </div>

            {/* MISCELLANEOUS ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>MISCELLANEOUS</h3>
                    </Divider>
                </div>
            </div>
        </div>
    );
}
export default HUD
