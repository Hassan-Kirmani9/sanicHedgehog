"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutSection.css'; // Import CSS file for custom styling
import { Icon, InlineIcon } from '@iconify/react';


interface ArrowProps {
  onClick: () => void;
}
function PrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow mr-28" onClick={onClick}>
<Icon icon="fluent:ios-arrow-left-24-regular" width="42" height="42"  style={{color: "black"}} />    </div>
 
  );
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow ml-28" onClick={onClick}>
<Icon icon="fluent:ios-arrow-right-24-regular" width="42" height="42"  style={{color: "black",  marginLeft:"-18px" }} /></div>
  );
}
interface DataItem {
  name: string;
  img: string;
}
interface ImageData {
  imgPath: string;
  width: number;
  height: number;
  marginLeft: string;
}

// Added type definitions for props passed to the AboutSection component
interface AboutSectionProps {
  changeImage: (imgPath: string) => void; // Updated to accept an image path argument
}

function AboutSection(props: AboutSectionProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => {}} />, // Pass onClick prop to PrevArrow
    nextArrow: <NextArrow onClick={() => {}} />, // Pass onClick prop to NextArrow
  
  };
  const handleClick = (index: number) => {
    console.log("Slide clicked:", index);
    if (index === 1) {
      props.changeImage('/xtww.png');
    } else if (index === 2) {
      props.changeImage('/bm_ch.png');
    } else if (index === 3) {
      props.changeImage('/gp_ch.png');
    } else if (index === 4) {
      props.changeImage('/im_ch.png');
    } else if (index === 5) {
      props.changeImage('/stch.png');
    }
  };

  return (
    <div className='w-3/4 ml-10'>
      <div className="mt-10">
        <Slider {...settings}>
          {/* Render the static div for the first slide */}
          <div className="about-slide" onClick={() => handleClick(0)}>
            <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824]">
              {/* Render the icon or content for the first slide */}
              <Icon icon="system-uicons:no-sign" width="82" height="62"  style={{color: "#764824" ,fontWeight:"bold",  marginTop:"20px", marginLeft:"4px"}} />            </div>
          </div>
          
          {/* Generate the rest of the slides dynamically */}
          {data.map((d,index) => (
            <div key={d.name} className="about-slide" onClick={() => handleClick(index + 1)}>
              <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824]">
                <img src={d.img} alt="" className="w-[80px] h-[80px] mt-[6px] ml-[4px] cursor-pointer" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
  
}


const data = [
  {
    name: `John Morgan`,
    img: `/xt.png`,
  },
  {
    name: `Ellie Anderson`,
    img: `/batman.png`,
    width: '5000px'
  },
  {
    name: `Nia Adebayo`,
    img: `/gp.png`,    
  },
  {
    name: `Rigo Louie`,
    img: `/ironman.png`,    
  },
  {
    name: `Mia Williams`,
    img: `/starwars.png`,    
  },

];

export default AboutSection;
