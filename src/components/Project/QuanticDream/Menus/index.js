import './index.scss'
import Divider from '@mui/material/Divider';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

//import flowShopImg from '../../../../assets/images/Reflexion UI Dev SHOP - FLOW RECAP.jpg'
import CarouselData from "../Carousel/carouselData";
import MockupShopData from "../Carousel/mockupShopData";
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

    const [qvalue, qsetValue] = React.useState(0);
    const qhandleChange = (event, newValue) => {
        qsetValue(newValue);
    };

    return (
        <div className='container-all'>
            <Divider className='center'>
                <h2>MENUS</h2>
            </Divider>
            

            {/* SHOP ------------------------------------------------------------------------------------------------ */}
            <div>
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
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label="Polished" {...a11yProps(0)}/>
                                <Tab label="Prototype" {...a11yProps(1)}/>
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
                
                <div className='container-horizontal gap top-separator-small'>
                    <div className='carousel-display'>
                        <div className='center top-separator-smallest'>
                            <div className='center'>
                                <Carousel data={MockupShopData} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/shop/StoreHomePageMockup.png')} alt="loading..." className='png-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Page layout showing the main elements</em></h5>
                        </div>
                    </div>
                    <div className='carousel-display'>
                        <div className='center top-separator-smallest'>
                            <div className='center'>
                                <Carousel data={CarouselData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QUESTS ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>QUESTS</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Reinforced long-term player retention through clear progression and reward visibility.</em></p>
                </div>

                <div className='container-video-text gap'>
                    <div>
                        <div className='center'>  
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={qvalue} textColor="secondary" indicatorColor="secondary" onChange={qhandleChange} aria-label="basic tabs example">
                                <Tab label="Polished" {...a11yProps(0)} />
                                <Tab label="Component Parameters" {...a11yProps(1)} />
                                <Tab label="Particules Code" {...a11yProps(2)} />
                            </Tabs>
                            </Box>
                        </div>
                        <div className='center'>  
                            <CustomTabPanel value={qvalue} index={0}>
                            <div className="video-border ratio ratio-16x9">
                                <iframe 
                                    width="560" 
                                    height="304"
                                    src="https://www.youtube.com/embed/_uS4u4RN9Ho" title="Trailer Video" frameBorder="0" 
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
                                    src={require('../../../../assets/images/quests/buildoDetails.png')} title="Trailer Video" frameBorder="0" 
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
                                    src={require('../../../../assets/images/quests/codeAnalysed.png')} title="Trailer Video" frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            </CustomTabPanel>
                        </div>
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

                <div>
                </div>
            </div>
            
            {/* CUSTOMIZATIONS ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>CUSTOMIZATIONS</h3>
                    </Divider>
                </div>

                
                <div className='container-video-text top-separator-small gap-big'>
                    <div className="video-border ratio ratio-16x9">
                        <iframe 
                            width="560" 
                            height="304"
                            src="https://www.youtube.com/embed/vDEURD_TKNo" title="Trailer Video" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="video-border ratio ratio-16x9">
                        <iframe 
                            width="560" 
                            height="304"
                            src="https://www.youtube.com/embed/DdUfd5PkMDI" title="Trailer Video" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className='container-horizontal gap top-separator-smallest'>
                    <div className="text-container">
                        <h3>2D</h3>

                        <p>Built a modular 2D profile <b>customization interface</b> allowing players to equip banners, borders, and titles through a category-based navigation system.</p>
                        <p>Focused on clear visual feedback, responsive interactions, and scalable content management for <b>LiveOps updates</b>.</p>

                        <p>The UI architecture was designed to support <b>dynamic content injection</b> without requiring client-side restructuring.</p>
                        
                        <ul>
                        <li><h4>Data-driven category system</h4></li>
                        <li><h4>Optimized menu navigation flow</h4></li>
                        <li><h4>Visual state feedback for equipped items</h4></li>
                        <li><h4>Scalable UI structure for future cosmetics</h4></li>
                        </ul>

                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="text-container">
                        <h3>3D</h3>
                        <p>Developed a character customization interface. The UI system is <b>built to be scalable</b>, allowing for the addition of new items to the inventory, whether they are unlocked or locked, purchased from the shop, or received as rewards.</p>
                        <p>Implemented on-demand 3D model instantiation to reduce unnecessary memory usage and improve runtime performance. Explored preload strategies to minimize transition latency between character previews.</p>
                        <p>Items purchased through the <b>in-game shop</b> could be equipped directly from the customization screen.</p>

                        <ul>
                        <li><h4>Dynamic cosmetic loading pipeline</h4></li>
                        <li><h4>LiveOps integration</h4></li>
                        <li><h4>UI-to-Shop integration</h4></li>
                        </ul>                        

                    </div>
                </div>
            </div>
            
            <div className='container-horizontal gap-big top-separator'>
                <div>
                    <img src={require('../../../../assets/images/customization/MockupCusto2DPage01.png')} alt="loading..." className='png-img'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>Mockup designed by a UX/UI designer</em></h5>
                    </div>
                </div>

                <div>
                    <div className="video-border ratio ratio-16x9">
                        <div className='center'>
                            <h5 className='center'><em>Banner component rules</em></h5>
                        </div>
                        <img className="banner-img translate-up" src={require('../../../../assets/images/customization/custo2DBannerMockupDesign.png')} alt="profile"></img>
                    </div>
                    
                    <div className='text-list'>
                        <h6>53 creature cosmetics</h6> 
                        <h6>56 spellcaster cosmetics</h6>
                        <h6>107 catalyst cosmetics</h6>
                        <h6>3 lifestone cosmetics</h6>
                        <h6>33 banners</h6>
                        <h6>8 borders</h6>
                        <h6>11 titles</h6>
                    </div>

                </div>

                <div>
                    <img src={require('../../../../assets/images/customization/Custo2DSelectionPage.png')} alt="loading..." className='png-img'/>
                    <div className='center top-separator-smallest'>
                        <h5><em>Final result with assets included</em></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menus
