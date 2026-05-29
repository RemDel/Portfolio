import './index.scss'
import profilePic from '../../assets/images/profilpic.jpg'

function WhoAmI() {
    return (

    <div className="container desc">
        <div className="text-zone">
            
            <img className="img" src={profilePic} alt="profile"></img>
            <h4>
                Software Engineer specialized in C++, currently working as a Game Developer with over one year of experience as a UI Developer at Quantic Dream. Passionate about learning and tackling new technical challenges, I enjoy building polished, high-quality interactive experiences while continuously expanding my skills through ambitious and stimulating projects.
            </h4>
        </div>
    </div>
    );
}
export default WhoAmI