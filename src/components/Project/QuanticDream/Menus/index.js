import './index.scss'
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

const Menus = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-all'>
            <div className='center'>
                <p>Menus</p>
            </div>

            <div className='center'>    
                <p>1. Shop</p>
            </div>
            <div className="container-video-text">
                <div>
                    <div className='center'>  
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Polished" {...a11yProps(0)} />
                            <Tab label="Prototype" {...a11yProps(1)} />
                            <Tab label="Mockup" {...a11yProps(2)} />
                        </Tabs>
                        </Box>
                    </div>
                    <div className='center'>  
                        <CustomTabPanel value={value} index={0}>
                        <div className="ratio ratio-16x9">
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
                        <div className="ratio ratio-16x9">
                            <iframe 
                                width="560" 
                                height="304" 
                                src="https://www.youtube.com/embed/d0eU81Nbhv8" title="Trailer Video" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                        <div className="ratio ratio-16x9">
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
                    <p>Versatile <b>software engineer</b> with experience in both the <b>video game</b> and <b>aerospace</b> industries. I worked for one year at 
                    
                    <em> <a target="_blank" rel='noreferrer' href='https://www.quanticdream.com/'>Quantic Dream</a> </em>

                    as a <b>UI Developer</b>, contributing to the multiplayer MOBA project 
                    
                    <em> <a target="_blank" rel='noreferrer' href='https://www.spellcasterschronicles.com/'>Spellcasters Chronicles</a>. </em>
                    
                    My work focused on developing <b>scalable, high-performance user interfaces</b>, including in-game shop systems with <b>Steam</b> transaction integration, 2D and 3D customization systems, daily quest features, HUD implementation, and UI performance optimization.</p>

                    <p>I also gained professional experience in the aerospace sector through civilian projects for the DGAC (Directorate General of Civil Aviation), developing applications used in air traffic control towers (<em>Elvira</em> and <em>Redevance</em>), as well as military projects for Safran Aircraft Engines involving Rafale aircraft engine systems.</p>

                    <p>With a background in <b>robotics engineering</b>, I specialize in <b>C/C++ development</b> and real-time systems, combining strong technical expertise with a focus on intuitive and efficient UI/UX design.</p>
                </div>
            </div>
            <div className='center'>
                <p>2. Quests</p>
            </div>

            <div className='center'>
                <p>3. Customizations</p>
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
