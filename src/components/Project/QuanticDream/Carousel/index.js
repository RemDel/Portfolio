import React, { useState } from "react";
import './index.scss';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide( (slide+1) % data.length );
  }
  const prevSlide = () => {
    setSlide( slide <= 0 ? data.length -1 : slide-1 );
  }

  return (
    <div>
      

      <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item, idx) => {
          return <img src={item.src} alt={item.alt} key={item.idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
          {data.map((_, idx) => {
          return <button key={idx} onClick={()=> setSlide(idx % data.length)} className={slide === idx ? "indicator center": "indicator center indicator-inactive"}></button>
        })}
        </span>
      </div>
      
      <div className="center">
        {data.map((item, idx) => {
          return <h5 className={slide === idx ? "slide-desc" : "slide-desc slide-hidden"}> <em>{item.alt}</em> </h5>
        })}
      </div>
    </div>
  );
};

export default Carousel


/*
<div className="carousel">
    <div className="group">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
    </div>
</div>
// aria-hidden

<BsArrowRightCircleFill></BsArrowRightCircleFill>
*/