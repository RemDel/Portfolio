import '../index.scss'
import Divider from '@mui/material/Divider';

const Exp3D = () => {
    return (
        <div className='container-all'>
            <Divider className='center'>
                <h2>3D Experiments</h2>
            </Divider>
            

            {/* CODE REFACTORING ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>Lorem ipsum</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</em></p>
                </div>

            </div>
            {/* UI DATA MANAGEMENT ------------------------------------------------------------------------------------------------ */}
            <div>
                <div className='center top-separator'>
                    <Divider className='center small-div'>
                        <h3>Lorem ipsum</h3>
                    </Divider>
                </div>

                <div className='center'>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</em></p>
                </div>
            </div>
        </div>
    );
}
export default Exp3D
