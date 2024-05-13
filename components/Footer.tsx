"use client"
import { Icon } from "@iconify/react"
import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto w-full px-4 sm:px-6  bg-[#764824] ">
      
     <br />
        <div className="flex flex-row items-center justify-center space-x-1 text-white ">
        $SANIC has no association with Sonic the Hedgehog. This token is simply a meme

coin with no intrinsic value or expectation of financial return.

© 2024 by $SANIC. All rights reserved.
      </div>
 
        <div className="flex flex-row items-center justify-center space-x-2 ">
          <a href="https://t.me/SanicTehHedgehogSOL" rel="noreferrer" target="_blank">
          <Icon icon="iconoir:telegram" width="42" height="42"  style={{color: "white"}} />
          </a>
          <a
            href="https://twitter.com/Sanic_On_Sol"
            rel="noreferrer"
            target="_blank"
          >
            <Icon icon="pajamas:twitter" width="42" height="36"  style={{color: "white"}} />
          </a>

       
        </div>
<br />
    </footer>
  )
}

export default Footer
