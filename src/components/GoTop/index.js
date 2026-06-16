import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const GoTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTop(true)
      }
      else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  
  return (
    <>
      {backToTop && (
        <button className='flat-button-top' style={{
        }}
        onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} className='icon-top'/></button>
      )}
    </>
  );
};
export default GoTop;