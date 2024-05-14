"use client"

import React, { CSSProperties } from 'react';
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
// Update AboutSectionProps interface
interface AboutSectionProps {
  changeImage: (imgPath: string, styles: CSSProperties) => void;
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
      props.changeImage('/xtww.png', { width: '400px', height: '400px', marginLeft: '-30px' });
    } 
    else if (index === 0) {
      props.changeImage('/hedgehog-removebg-preview.png', { width: '5px', height: '511px', marginLeft: '-5000px' });
    }
    else if (index === 2) {
      props.changeImage('/bat.png', { width: '5px', height: '511px', marginLeft: '-5000px' });
    } else if (index === 3) {
      props.changeImage('/gun.png', { width: '600px', height: '600px', marginLeft: '-40px' });
    } else if (index === 4) {
      props.changeImage('/iron.png', { width: '700px', height: '700px', marginLeft: '-60px' });
    } else if (index === 5) {
      props.changeImage('/star.png', { width: '800px', height: '800px', marginLeft: '-70px' });
    }
  };
  const handleClick2 = (index: number) => {
    console.log("Slide clicked:", index);
    if (index === 1) {
      props.changeImage('/pink_hat.png', { width: '400px', height: '400px', marginLeft: '-30px' });
    } 
    else if (index === 0) {
      props.changeImage('/hedgehog-removebg-preview.png', { width: '5px', height: '511px', marginLeft: '-5000px' });
    }
    else if (index === 2) {
      props.changeImage('/reverse_hatch.png', { width: '5px', height: '511px', marginLeft: '-5000px' });
    } else if (index === 3) {
      props.changeImage('/hat_ch.png', { width: '600px', height: '600px', marginLeft: '-40px' });
    } else if (index === 4) {
      props.changeImage('/head_ch.png', { width: '700px', height: '700px', marginLeft: '-60px' });
    } else if (index === 5) {
      props.changeImage('/red_hat.png', { width: '800px', height: '800px', marginLeft: '-70px' });
    }
  };
  

  return (
    <div className='w-3/4 ml-10'>
      <div className="mt-10">
        <p className='text-[#764824] font-bold  ml-2 mb-2'>HEDGEHOG</p>
       
        <Slider {...settings}>
          {/* Render the static div for the first slide */}
          <div className="about-slide" onClick={() => handleClick(0)}>
            <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824] cursor-pointer hover:bg-white">
              {/* Render the icon or content for the first slide */}
              <Icon icon="system-uicons:no-sign" width="82" height="62"  style={{color: "#764824" ,fontWeight:"bold",  marginTop:"20px", marginLeft:"4px"}} />            </div>
          </div>
          
          {/* Generate the rest of the slides dynamically */}
          {data.map((d,index) => (
            <div key={d.name} className="about-slide" onClick={() => handleClick(index + 1)}>
              <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824] hover:bg-white">
                <img src={d.img} alt="" className="w-[80px] h-[80px] mt-[6px] ml-[4px] cursor-pointer" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
   {/* Slider */}
      <div className="mt-10">
        <p className='text-[#764824] font-bold  ml-2 mb-2'>FACE</p>
       
        <Slider {...settings}>
          {/* Render the static div for the first slide */}
          <div className="about-slide" onClick={() => handleClick2(0)}>
            <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824] cursor-pointer hover:bg-white">
              {/* Render the icon or content for the first slide */}
              <Icon icon="system-uicons:no-sign" width="82" height="62"  style={{color: "#764824" ,fontWeight:"bold",  marginTop:"20px", marginLeft:"4px"}} />            </div>
          </div>
          
          {/* Generate the rest of the slides dynamically */}
          {face_data.map((d,index) => (
            <div key={d.name} className="about-slide" onClick={() => handleClick2(index + 1)}>
              <div className="bg-[#FBECCF] h-[100px] text-black rounded-xl border-solid border-[1px] border-[#764824] hover:bg-white">
                <img src={d.img} alt="" className="w-[80px] h-[80px] mt-[14px] ml-[4px] cursor-pointer" />
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

const face_data = [
  {
    name: `John Morgan`,
    img: `/hat.png`,
  },
  {
    name: `Ellie Anderson`,
    img: `/hatwglasses.png`,
    width: '5000px'
  },
  {
    name: `Nia Adebayo`,
    img: `/hat2.png`,    
  },
  {
    name: `Rigo Louie`,
    img: `/head.png`,    
  },
  {
    name: `Mia Williams`,
    img: `/hat3.png`,    
  },

];

export default AboutSection;
