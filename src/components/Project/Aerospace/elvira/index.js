import '../../Personal/index.scss'
import Divider from '@mui/material/Divider';

const Elvira = () => {

    return (
        <div className='container-all'>
            <Divider className='center'>
                <h3>ATM (Air Traffic Management)</h3>
            </Divider>

            <h3>Clients: DTI-DSNA-DGAC</h3>
            
            <div className='container-video-text gap'>
                <div className='text-container-tier'>
                    
                    <p><b>ELVIRA:</b> one Tech Lead, one Business Analyst, one Developer</p>
                    <p>
                        Within the ATM (Air Traffic Management) department responsible for software development for the ELVIRA and REDEVANCE applications.
                        ELVIRA is an <b>automated tool</b>, developed and deployed by the DSNA as part of three major activities: <b>safety management</b>, <b>technical assessment</b>, and <b>environmental
                        assessment</b>. 
                    </p>
                    <p>
                        Today, ELVIRA is the cornerstone of safety management at Paris-Charles de Gaulle Airport. The <em>replay function</em> allows the safety manager to view the sequences exactly as
                        they occurred on the controller's screen. 
                    </p> 

                    <div className='top-separator-small'>
                    </div>
                    <p><b>REDEVANCE:</b> one Tech Lead/Business Analyst, one Developer</p>
                    <p>
                        When an aircraft flies through French airspace, it owes a fee to the government
                        (similar to a toll). REDEVANCE is an application that manages this: using the list of flights
                        completed, it tracks which beacons detected the flights, and a fee is
                        then charged.
                    </p>
                    

                    <div>
                        <div className='top-separator-small text-container-auto-real'>
                            
                            <p><b>Development of New Features:</b></p>
                            <ul>
                                <li><h4>Development in C</h4></li>
                                <li><h4>GUI development in IlogViews</h4></li>
                                <li><h4>MySQL database</h4></li>
                            </ul>

                            <p><b>Areas of Expertise/Services Provided:</b></p>
                            <ul>
                                <li><h4>Unit testing (non-automated)</h4></li>
                                <li><h4>Non-regression testing (non-automated)</h4></li>
                                <li><h4>Preparation of release packages / production deployments</h4></li>
                                <li><h4>Diagnosis and correction of issues</h4></li>
                                <li><h4>Evolutionary maintenance</h4></li>
                                <li><h4>Suggestions for improvement (Editing source files to modify the user interface without using dedicated software)</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='center'>
                <p><b>Technical environment:</b> C, C++/Qt, MySQL, TortoiseSVN, Git, IlogViews, Jira</p>
            </div>
          
        </div>
    );
}
export default Elvira