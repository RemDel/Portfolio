//import { Link } from 'react-router-dom'
import './index.scss'

import { Container } from 'react-bootstrap';
//bCqr99flnVk
const Sidebar = () => (
    <div className='nav-bar'>
      <Container>
        <div className="ratio ratio-16x9">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/KU--4IVoDHo" title="Trailer Video" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
      </Container>
    </div>
)
export default Sidebar
