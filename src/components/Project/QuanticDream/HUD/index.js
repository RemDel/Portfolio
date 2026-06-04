import '../Menus/index.scss';
import Divider from '@mui/material/Divider';

const HUD = () => (
    <div className='container-all'>
        <Divider className='center'>
            <h2>HUD</h2>
        </Divider>
        
        <div className='center'>
            <Divider className='center small-div'>
                <h2>MINIMAP</h2>
            </Divider>
        </div>

        <div className='center'>
            <Divider className='center small-div'>
                <h2>LEVEL UP</h2>
            </Divider>
        </div>

        <div className='center'>
            <Divider className='center small-div'>
                <h2>DIVERS</h2>
            </Divider>
        </div>

    </div>
)
export default HUD
