import '../Menus/index.scss'
import Divider from '@mui/material/Divider';

const Performances = () => {
    return (
        <div className='container-all'>
            <Divider className='center'>
                <h2>PERFORMANCES</h2>
            </Divider>
            

            {/* CODE REFACTORING ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>CODE REFACTORING</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Reduced technical debt, improved maintainability, and increased overall UI performance.</em></p>
                </div>

                <div className="container-video-text gap">
                    <div>
                        <img src={require('../../../../assets/images/performances/Minimap.gif')} alt="loading..." className='png-img-minimap'/>
                    </div>

                    <div className="text-container">
                        <p>
                            Refactored legacy UI systems to improve <b>maintainability</b>, <b>scalability</b>, and <b>runtime performance</b>.
                            Reworked existing UI architecture into a more <b>modular structure</b>, reducing system complexity and simplifying future feature integration.
                            One major optimization focused on the minimap update pipeline, significantly reducing UI update costs during gameplay.
                        </p>
                        <p>
                            <em>Minimap UI update cost reduced from <b>4.36 ms</b> to <b>2.09 ms</b>.</em>
                        </p>

                        <ul>
                        <li><h4>Modular UI architecture improvements</h4></li>
                        <li><h4>Refactoring of legacy systems</h4></li>
                        <li><h4>Runtime performance optimization</h4></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* UI DATA MANAGEMENT ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>UI DATA MANAGEMENT</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Reorganized the UI data architecture by separating resources into dedicated runtime categories based on game flow states.</em></p>
                </div>

                <div className="container-video-text gap">
                    <div>
                        <img src={require('../../../../assets/images/performances/CleanDivScale500_200.png')} alt="loading..." className='png-img'/>
                    </div>

                    <div className="text-container">
                        <p>
                            Previously, UI assets and related data were loaded globally, increasing unnecessary memory usage and reducing scalability.
                        </p>
                        <p>
                            The new structure <b>improved resource organization</b> and allowed systems to better control which data sets were active depending on the current game context.
                        </p>

                        <ul>
                        <li><h4>Common</h4></li>
                        <li><h4>Menu</h4></li>
                        <li><h4>Pre-lobby</h4></li>
                        <li><h4>In-game</h4></li>
                        </ul>
                    </div>
                </div>

                <div className='container-horizontal gap-big top-separator-smallest'>
                    <div>
                        <img src={require('../../../../assets/images/performances/FolderBuildo.png')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Database UI files after reorganizations</em></h5>
                        </div>
                    </div>

                    <div>
                        <img src={require('../../../../assets/images/performances/FolderLoadBuildoScript.png')} alt="loading..." className='height-img'/>
                        <div className='center top-separator-smallest'>
                            <h5><em>Extract from a script to load a database</em></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Performances
