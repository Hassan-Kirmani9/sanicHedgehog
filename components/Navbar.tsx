import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "SANIC",
    page:"home"
  },
  
]

export default function Navbar() {
 
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
<header className="w-full mx-auto px-4 sm:px-20 top-0 z-0  text-[#764824]" style={{ backgroundColor: "#FBECCF", fontFamily: "'Bitter', sans-serif", fontSize: "29px", color: "#764824", fontWeight: "bold" }}>
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Image
            src="/hedgehog-removebg-preview.png"
            alt=""
            width={80} //
            height={80}
            className="border-solid border-2 border-[#764824] rounded-full"
          />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-[#764824]  cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                    style={{
                      color: "#764824",
                      fontFamily: "'Bitter', sans-serif",
                      fontSize: "29px",
                      fontWeight: "bold",
                      letterSpacing: "1.6px"
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
             
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
