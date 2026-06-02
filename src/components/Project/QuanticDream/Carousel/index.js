import React from "react";
import './index.scss'

const Carousel = ({ data }) => {
  console.log(data);
  return (
  <div>
    {data.map((item, idx) => {
      return <img src={item.src} alt={item.alt} key={item.idx} />
    })}
  </div>
);}

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
*/