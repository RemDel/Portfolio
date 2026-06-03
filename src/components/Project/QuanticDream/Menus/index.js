import './index.scss'
import Divider from '@mui/material/Divider';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

//import flowShopImg from '../../../../assets/images/Reflexion UI Dev SHOP - FLOW RECAP.jpg'
import CarouselData from "../Carousel/carouselData";
import Carousel from '../Carousel';


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

const Menus = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-all'>
            <Divider className='center'>
                <h2>MENUS</h2>
            </Divider>
            

            {/* ------------------------------------------------------------------------------------------------ */}
            <div className='center top-separator'>
                <Divider className='center small-div'>
                    <h3>SHOP</h3>
                </Divider>
            </div>

            <div className='center'>
                <p><em>Offers and bundle are setup in the back end through a LiveOps portal and the game shop load those offers and bundles to display them to the player.</em></p>
            </div>

            <div className="container-video-text gap">
                <div>
                    <div className='center'>  
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Polished" {...a11yProps(0)} />
                            <Tab label="Prototype" {...a11yProps(1)} />
                        </Tabs>
                        </Box>
                    </div>
                    <div className='center'>  
                        <CustomTabPanel value={value} index={0}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304" 
                                src="https://www.youtube.com/embed/Qkq-awLhALU" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                        <div className="video-border ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304" 
                                src="https://www.youtube.com/embed/qVriOYI6P_g" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                    </div>
                </div>

                <div className="text-container">
                    <p>
                        Developed and integrated the <b>in-game storefront UI</b>, supporting cosmetic purchases, virtual currency transactions, and <b>LiveOps content delivery</b>. 
                        Collaborated closely with <em>UX/UI designers</em>, <em>Online Services</em>, and <em>Gameplay Programming</em> teams to ensure accurate display of transaction and inventory data within the client.
                    </p>
                    <p>    
                        Implemented support for purchases using premium currency (Elder Gold) and acquiring this currency through the Steam Overlay <b>payment flow</b>. 
                        Built the storefront with a <b>modular</b> and <b>data-driven architecture</b>, allowing new catalog content, promotions, and monetization features to be deployed efficiently without UI refactoring.
                    </p>

                    <ul>
                    <li><h4>Storefront UI architecture</h4></li>
                    <li><h4>LiveOps integration</h4></li>
                    <li><h4>Steam overlay purchase integration</h4></li>
                    <li><h4>Scalable shop category structure</h4></li>
                    </ul>
                </div>
            </div>
            
            <div className='center'>
                <Carousel data={CarouselData} />
            </div>


            {/* ------------------------------------------------------------------------------------------------ */}
            <div className='center top-separator'>
                <Divider className='center small-div'>
                    <h3>QUESTS</h3>
                </Divider>
            </div>

            <div className='center'>
                <p><em>Reinforced long-term player retention through clear progression and reward visibility.</em></p>
            </div>

            <div className='container-video-text gap'>
                <div className="video-border ratio ratio-16x9">
                    <iframe 
                        width="560" 
                        height="304"
                        src="https://www.youtube.com/embed/_uS4u4RN9Ho" title="Trailer Video" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="text-container">
                    <p>
                        Implemented a recurring quest system supporting <b>daily and weekly objectives</b> through a <b>LiveOps-driven</b> configuration pipeline.
                    </p>
                    <p>
                        The system supported <b>multiple quest pools</b> with assignment logic, so that both easy and difficult daily quests could be provided.
                        Reward feedback animations were fully generated in code to minimize performance overhead and dynamically adapt particle quantities to reward values.
                    </p>
                    <p>
                        <em>While this approach improved runtime efficiency, it also revealed limitations in animation flexibility and iteration speed, highlighting future opportunities for tooling improvements.</em>
                    </p>
                   
                    <ul>
                    <li><h4>Progress tracking UI</h4></li>
                    <li><h4>LiveOps integration</h4></li>
                    <li><h4>Runtime-generated reward VFX</h4></li>
                    <li><h4>Performance-conscious animation systems</h4></li>
                    </ul>
                </div>
            </div>

            <div className='container-horizontal gap top-separator-small'>
                <div>
                    <img src={require('../../../../assets/images/quests/questDesigned.png')} alt="loading..." className='png-img'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>Mockup designed by a UX/UI designer</em></h5>
                    </div>
                </div>
                <div>
                    <img src={require('../../../../assets/images/quests/questAnalysed.png')} alt="loading..." className='png-img'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>Breakdown into simple components for integration</em></h5>
                    </div>
                </div>
                <div>
                    <img src={require('../../../../assets/images/quests/questResult.png')} alt="loading..." className='png-img'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>Final result with assets included</em></h5>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}
            <div className='center top-separator'>
                <Divider className='center small-div'>
                    <h3>CUSTOMIZATIONS</h3>
                </Divider>
            </div>

            <div className='container-horizontal'>

                <div className="text-container">
                    <p>Versatile <b>software engineer</b> with experience in both the <b>video game</b> and <b>aerospace</b> industries. I worked for one year at 
                    
                    <em> <a target="_blank" rel='noreferrer' href='https://www.quanticdream.com/'>Quantic Dream</a> </em>

                    as a <b>UI Developer</b>, contributing to the multiplayer MOBA project 
                    
                    <em> <a target="_blank" rel='noreferrer' href='https://www.spellcasterschronicles.com/'>Spellcasters Chronicles</a>. </em>
                    
                    My work focused on developing <b>scalable, high-performance user interfaces</b>, including in-game shop systems with <b>Steam</b> transaction integration, 2D and 3D customization systems, daily quest features, HUD implementation, and UI performance optimization.</p>

                    <p>I also gained professional experience in the aerospace sector through civilian projects for the DGAC (Directorate General of Civil Aviation), developing applications used in air traffic control towers (<em>Elvira</em> and <em>Redevance</em>), as well as military projects for Safran Aircraft Engines involving Rafale aircraft engine systems.</p>

                    <p>With a background in <b>robotics engineering</b>, I specialize in <b>C/C++ development</b> and real-time systems, combining strong technical expertise with a focus on intuitive and efficient UI/UX design.</p>
                </div>
            </div>
        </div>
    );
}
export default Menus
