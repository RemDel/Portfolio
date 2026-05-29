import './index.scss'
import profilePic from '../../assets/images/profilpic.jpg'

function WhoAmI() {
    return (

    <div className="container desc">
        <div className="text-zone">
            <img className="img" src={profilePic} alt="profile"></img>
            <div className="text-container">
                <p>Versatile <b>software engineer</b> with experience in both the <b>video game</b> and <b>aerospace</b> industries. I worked for one year at 
                
                <em> <a target="_blank" rel='noreferrer' href='https://www.quanticdream.com/'>Quantic Dream</a> </em>

                as a <b>UI Developer</b>, contributing to the multiplayer MOBA project 
                
                <em> <a target="_blank" rel='noreferrer' href='https://www.spellcasterschronicles.com/'>Spellcasters Chronicles</a>. </em>
                
                My work focused on developing <b>scalable, high-performance user interfaces</b>, including in-game shop systems with <b>Steam</b> transaction integration, 2D and 3D customization systems, daily quest features, HUD implementation, and UI performance optimization.</p>

                <p>I also gained professional experience in the aerospace sector through civilian projects for the DGAC (Directorate General of Civil Aviation), developing applications used in air traffic control towers (<em>Elvira</em> and <em>Redevance</em>), as well as military projects for Safran Aircraft Engines involving Rafale aircraft engine systems.</p>

                <p>With a background in <b>robotics engineering</b>, I specialize in <b>C/C++ development</b> and real-time systems, combining strong technical expertise with a focus on intuitive and efficient UI/UX design.</p>

                <h3>Technical Skills</h3>

                <ul>
                <li><p><b>Languages:</b> C, C++, C#, JavaScript, TypeScript, Java, Python</p></li>
                <li><p><b>Frameworks & Tools:</b> Qt</p></li>
                <li><p><b>Expertise:</b> UI Development, UI/UX, Performance Optimization, Real-Time Applications, Scalable Systems</p></li>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default WhoAmI
