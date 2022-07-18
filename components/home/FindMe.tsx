import React from 'react'
import Link from "next/link"

//import KUTE from 'kute.js'

import {AiFillGithub} from "react-icons/ai"
import {TbWorld} from "react-icons/tb"


const FindMe = () => {
   const techs = [
    {
      id: 1,
      child  : (
        <>
           <TbWorld size={30} />
        </>
      ),
      href: "https://finnguha.vercel.app",
      title: "My Homepage ",
      style: "shadow-black",
    },


    {
      id: 2,
      child  : (
        <>
           <AiFillGithub size={30} />
        </>
      ),
      href:"https://github.com/sudofinn",
      title:"My Github Profil",
      style:"shadow-black"
      }
   ]
    

  return (

    
    <section className="relative">
      <div className="custom-shape-divider-bottom-1658137204">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>


        <div className="">
            <h1 data-aos="zoom-in-down" className="text-7xl mt-48 text-center hover:scale-110 duration-500 ">Find me</h1>
            <p  data-aos="zoom-in-down" className="text-2xl text-center mx-12 my-12 ">You can also take a look at  other website/platforms
             I`m active on. </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16 text-center   py-12 px-20 sm:px-8">
          {techs.map(({ id, href, child, title, style }) => (
            <div
              key={id}
              data-aos="fade-up"
              className={`shadow-md hover:scale-105 duration-500 py-2 text-black hover:text-white hover:bg-black  rounded-lg ${style}`}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center '
              ><a>{child}</a></a>
              <p className="mt-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>

        
        

    </section>
  )
}

export default FindMe

{/*}
 <svg
        className="blob-motion"
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink ="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(450.7256843113689 283.4942824330989)">
          <path
            id="blob1"
            d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
            fill="#000000"
          ></path>
        </g>
        <g transform="translate(509.54377535978017 281.49390864595887)" >
          <path
            id="blob2"
            d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
            fill="#000000"
          ></path>
        </g>
      </svg>
*/}