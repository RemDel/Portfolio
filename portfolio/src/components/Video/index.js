import './index.scss'

import { Container } from 'react-bootstrap';
//bCqr99flnVk
//KU--4IVoDHo
const Video = () => (
    <div className='video'>
      <Container>
        <div className="ratio ratio-16x9">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/bCqr99flnVk" title="Trailer Video" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
      </Container>
    </div>
)
export default Video
