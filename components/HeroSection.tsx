"use client" // this is a client component
import React, { CSSProperties, useState } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { Icon } from '@iconify/react';
import AboutSection from "./AboutSection"
import { Text } from "./Text"

const HeroSection = () => {
  const [heroImage, setHeroImage] = useState('/hedgehog-removebg-preview.png');
  const [heroImageStyles, setHeroImageStyles] = useState({
    width: '400px',
    height: '400px',
    marginLeft: '-30px',
  });
 
const changeImage = (imgPath: string, styles: CSSProperties) => {
  console.log("Change image function called with path and styles:", imgPath, styles);

  // Ensure 'width', 'height', and 'marginLeft' are strings
  const newStyles = {
    width: styles.width ? styles.width.toString() : '', // Check if width is defined
    height: styles.height ? styles.height.toString() : '', // Check if height is defined
    marginLeft: styles.marginLeft ? styles.marginLeft.toString() : '', // Check if marginLeft is defined
  };

  // Set the hero image and styles
  setHeroImage(imgPath);
  setHeroImageStyles(newStyles);
};

const handleReset = () => {
  // Reset the hero image and styles
  setHeroImage('/hedgehog-removebg-preview.png');
  setHeroImageStyles({
    width: '400px',
    height: '400px',
    marginLeft: '-30px',
  });
};

 const handleDownload = () => {
    // Create a virtual anchor element
    const link = document.createElement('a');
    link.href = heroImage; // Set the href attribute to the currently rendered image
    link.download = 'image.png'; // Set the download attribute with a default filename
    document.body.appendChild(link); // Append the anchor element to the document body
    link.click(); // Simulate a click event to trigger the download
    document.body.removeChild(link); // Remove the anchor element from the document body
  };

  return (
    <section id="home" >
      <div className="relative h-9 mt-72 bottom-20 ml-56 flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left " style={{width:"90%"}}>
      <div className=" px-10 w-32 border-r-2 border-[#764824] md:mt-2 md:w-1/2" style={{ marginLeft: "-2", marginTop: "-60px" }}> {/* Added inline style to move the image up and towards left */}
        <div className="w-full border-solid border-8 border-[#764824] rounded-xl" style={{ ...heroImageStyles , width: '400px', height: '400px',  marginLeft: "-30px"  }}>
          <Image
            src={heroImage} // Updated to use dynamic heroImage state
            alt="sanic"
            width={400} //
            height={400}
          />
          </div>
           <div className="mt-4 flex flex-col items-center ml-6">
           <button onClick={handleReset} className="mb-2 py-2 text-center font-semibold w-96 border-4 text-[#764824] bg-[#fff] border-[#764824] rounded-full flex items-center justify-center" style={{ fontFamily: "'Bitter', sans-serif", fontSize: "22px", marginLeft: "-80px"  }}>
  <Icon icon="system-uicons:reset-forward" width="30" style={{ color: "#764824", marginRight: "10px" , fontSize:'20px' ,fontWeight:"bolder" }} />
  Reset
</button>
{/* <button className="mb-2 py-2 text-center font-semibold w-96 border-4 text-[#764824] bg-[#fff] border-[#764824] rounded-full flex items-center justify-center" style={{ fontFamily: "'Bitter', sans-serif", fontSize: "22px", marginLeft: "-80px"  }}>
  <Icon icon="fe:random" width="30" style={{ color: "#764824", marginRight: "10px" , fontSize:'20px' ,fontWeight:"bolder" }} />
  Generate Random
</button> */}
<button onClick={handleDownload} className="mb-2 py-2 text-center font-semibold w-96 border-4 text-[#fff] bg-[#764824] border-[#fff] rounded-full flex items-center justify-center" style={{ fontFamily: "'Bitter', sans-serif", fontSize: "22px", marginLeft: "-80px"  }}>
  <Icon icon="material-symbols:download" width="30" style={{ color: "#dbdbdb", marginRight: "10px" , fontSize:'20px' ,fontWeight:"bolder" }} />
  Download
</button>
         

  </div>
 
        </div>
        <div className="  md:mt-2 md:w-3/5 text-[#764824]" style={{marginRight:"320px", marginTop:"-200px", fontFamily: "'Bitter', sans-serif", width:"80%"}}>
          
          <h1 className="text-sm font-bold ml-12 md:mt-0" style={{fontSize:'20px'}}>CREATE YOUR SANIC</h1>
           
      <div >
      <AboutSection changeImage={changeImage} /> 
      </div>
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection
