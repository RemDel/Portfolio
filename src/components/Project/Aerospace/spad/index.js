import '../../Personal/index.scss'
import Divider from '@mui/material/Divider';

const Spad = () => {

    return (
        <div className='container-all  top-separator'>
            <Divider className='center'>
                <h3>SPAD M88 (Système de Pronostic et d'Aide au Diagnostic des Moteurs Rafale 88)</h3>
            </Divider>
            <h3>Client: Safran Aircraft Engine</h3>

            <div className='container-video-text gap'>
                <div className='text-container-tier'>
                    <p>
                        Maintenance of SPAD, a <b>Predictive Maintenance</b> and <b>Diagnostic Support System</b>, 
                        for the Snecma M88-4E engines on <b>Dassault</b> Aviation's Rafale aircraft.
                    </p>
                    <p>    
                        The engines of Rafale aircraft have several hundred sensors. General maintenance
                        is performed after each flight to <em>ensure the aircraft's safety</em> and proper
                        operation. SPAD is an application that centralizes all data and
                        provides a <em>rapid analysis</em> of the various engine sensors.
                    </p>

                    <div>
                        <div className='top-separator-small text-container-auto-real'>
                            
                            <p><b>Development of New Features:</b></p>
                            <ul>
                                <li><h4>Development of front-end enhancements using TypeScript and Angular</h4></li>
                                <li><h4>Back-end development using C# .NET</h4></li>
                                <li><h4>Debugging the SPAD M88 application</h4></li>
                                <li><h4>Troubleshooting issues</h4></li>
                            </ul>

                            
                            <p><b>Areas of responsibility/Activities:</b></p>
                            <ul>
                                <li><h4>Development</h4></li>
                                <li><h4>Unit testing (non-automated)</h4></li>
                                <li><h4>Non-regression testing (non-automated)</h4></li>
                                <li><h4>Diagnosis and correction of issues</h4></li>
                                <li><h4>Evolutive maintenance</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='center'>
                <p><b>Technical environment:</b> Angular, TypeScript, JavaScript, C#, .NET Core 6</p>
            </div>

            <div className='top-separator'>
                <p>  .  </p>
            </div>
            <div className='top-separator'>
                <p>  .  </p>
            </div>
        </div>
    );
}
export default Spad