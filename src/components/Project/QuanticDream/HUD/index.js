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
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                <div className='center'>
                    <p><b>1,406 creatures/buildings</b> summoned per match, averaging <b>230</b> per player per match.</p>
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
                        <img src={require('../../../../assets/images/minimap/MinimapBefore3.gif')} alt="loading..." className='png-img-minimap'/>
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

                <div className="container-video-text gap">
                    <div>
                        <div className='center'>  
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label="Game Designer Insights" {...a11yProps(0)}/>
                                <Tab label="UX/UI Mockup" {...a11yProps(1)}/>
                                <Tab label="Prototype" {...a11yProps(2)}/>
                                <Tab label="Final result" {...a11yProps(3)}/>
                                <Tab label="(not implemented)" {...a11yProps(4)}/>
                            </Tabs>
                            </Box>
                        </div>
                        <div className='center'>  
                            <CustomTabPanel value={value} index={0}>
                            <div className="video-border ratio ratio-16x9">
                                <img src={require('../../../../assets/images/lvlup/versions/image.webp')} alt="loading..." className='height-minimap-img'/>
                            </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304" 
                                    src="https://www.youtube.com/embed/El93X6Z5SBQ" title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304" 
                                    src="https://www.youtube.com/embed/p6N7tQZcwXA" title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304" 
                                    src="https://www.youtube.com/embed/Xt-Cht5vR5c" title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={4}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304" 
                                    src="https://www.youtube.com/embed/rc122qUIRK4" title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                        </div>
                    </div>

                    <div className="text-container">
                        <p>
                            The progression is a dynamic system where players grow stronger during a match by earning points 
                            from defeating enemies or completing objectives, allowing them to <b>level up</b> and <b>unlock upgrades</b> that shapes 
                            their playstyle and strategy within a single match.    
                        </p>

                        <p><em>Bonus categories awarded upon leveling up:</em></p>
                        <ul>
                        <li><h4><b>Hero Resources</b> <em>(Life Max, Source Max, Life Recovery Speed, ...)</em></h4></li>
                        <li><h4><b>Summons & Buildings</b> <em>(Charges, Populations Max...)</em></h4></li>
                        <li><h4><b>Spells</b> <em>(Charges, Damage...)</em></h4></li>
                        </ul>
                    </div>
                </div>

                <div className='center top-separator'>
                    <p>Development of the <em>player information display</em>: health, hero image, experience, and progression <br/>
                    The <b>design</b> has been <b>refined</b> based on internal feedback and playtests; <b>here is how it has evolved</b></p>
                </div>
                <div className='container-horizontal gap'>
                    <div>
                        <p className='center'>Version 1</p>
                        <img src={require('../../../../assets/images/lvlup/player/playerV0.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Basic prototype with key information</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 2</p>
                        <img src={require('../../../../assets/images/lvlup/player/playerV1.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Adding assets and animations</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 3</p>
                        <img src={require('../../../../assets/images/lvlup/player/playerV2.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>New Design and new animations</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 4</p>
                        <img src={require('../../../../assets/images/lvlup/player/playerV3.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Reorganization of information</em></h5>
                        </div>
                    </div>
                </div>

                <div className='center top-separator'>
                    <p><em>System that enable the player to improve the Spellcaster capabilities during a single match.</em> <br/>
                    The <b>design</b> has been <b>refined</b> based on internal feedback and playtests; <b>here is how it has evolved</b>
                    </p>
                </div>

                <div className='container-horizontal gap'>
                    <div>
                        <p className='center'>Version 1</p>
                        <img src={require('../../../../assets/images/lvlup/v1.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Up to three modifiers per bonus</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 2</p>
                        <img src={require('../../../../assets/images/lvlup/v2.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>One modifier, with a full description</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 3</p>
                        <img src={require('../../../../assets/images/lvlup/v3.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Design in line with the art direction</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 4</p>
                        <img src={require('../../../../assets/images/lvlup/v4.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Reorganization of information</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Version 5</p>
                        <img src={require('../../../../assets/images/lvlup/v5.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Final implementation</em></h5>
                        </div>
                    </div>
                    <div>
                        <p className='center'><em>(Version 6 - Not Implemented)</em></p>
                        <img src={require('../../../../assets/images/lvlup/v6.png')} alt="loading..." className='height-minimap-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>(New design by a UX/UI designer)</em></h5>
                        </div>
                    </div>
                </div>


            </div>

            {/* MISCELLANEOUS ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>MISCELLANEOUS</h3>
                    </Divider>
                </div>

                <div className='center top-separator-small'>
                    <Divider className='center big-div'>
                        <p>HUD Lifestones</p>
                    </Divider>
                </div>
                
                <div className='center'>
                    <p><em>The life information HUD for <b>Lifestones</b> has been redesigned.</em></p>
                </div>

                <div className='container-horizontal gap'>
                    <div>
                        <img src={require('../../../../assets/images/lifestones/lifestoneBefore.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Implementation prior to the redesign</em></h5>
                        </div>
                    </div>
                    
                    <div>
                        <img src={require('../../../../assets/images/lifestones/lifestoneAfter.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Final result with assets and animations</em></h5>
                        </div>
                    </div>
                </div>

                <div className='container-horizontal gap top-separator-smallest'>
                    <div>
                        <img src={require('../../../../assets/images/lifestones/lifestoneProto.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Basic prototype</em></h5>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/lifestones/graphLifestone2.png')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Animation graph</em></h5>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            The Lifestone shares the same visual identity as its minimap icon, ensuring <b>instant recognition.</b></p>
                        <p>
                            Its alert animation <em>dynamically accelerates</em> as health decreases, providing <b>clear urgency cues</b>. 
                            A destruction animation was considered but excluded to preserve visual clarity and reduce screen clutter.
                        </p>

                    </div>
                </div>


                <div className='center top-separator-small'>
                    <Divider className='center big-div'>
                        <p>Tutorial</p>
                    </Divider>
                </div>
                <div className='container-horizontal gap top-separator-smallest'>
                    <div>
                        <img src={require('../../../../assets/images/tutorial/Tutorial Pop-Up.gif')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Developed a simple pop-up window to display information during the tutorial</em></h5>
                        </div>
                    </div>                    
                    <div>
                        <img src={require('../../../../assets/images/tutorial/tutorial.png')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Screenshot from the tutorial</em></h5>
                        </div>
                    </div>

                    <div className="text-container">
                        <p>Implemented the UI for <b>tutorial subtitles</b> and the <b>FTUE checklist</b>, 
                        ensuring clear guidance and objective tracking throughout the <em>onboarding experience.</em></p>
                    </div>
                </div>


                <div className='center top-separator-small'>
                    <Divider className='center big-div'>
                        <p>Moderation system</p>
                    </Divider>
                </div>
                
                
                <div className='center'>
                    <p>Added a <b>reporting system</b>, accessible from the scoreboard during the game or after the game.</p>
                </div>

                <div className='container-horizontal gap'>
                    <div className="video-border ratio ratio-16x9">
                        <iframe 
                            width="560" 
                            height="304" 
                            src="https://www.youtube.com/embed/cJ8acjqpoXY" title="Trailer Video" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>             
                   
                </div>
            </div>
            <div className='top-separator'>
                <p>  .  </p>
            </div>
        </div>
    );
}
export default HUD
