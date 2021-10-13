
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image'

const slideImages = [
  "/assets/bg/transparent.png",
  "/assets/slider/az_left.png",
  "/assets/slider/az_right_0.png",
  "/assets/slider/az_right_1.png",
];


export default function Slider() {

  return (
    <>
 <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}
