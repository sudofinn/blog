import React from 'react'
import Link from "next/link"

import {MdOutlineWork} from "react-icons/md"
import {AiFillBook} from "react-icons/ai"
import{BsCodeSlash} from "react-icons/bs"
import { GiMeditation} from "react-icons/gi"

const index = () => {
  const techs = [
    {
      id: 1,
      child  : (
        <>
           <MdOutlineWork size={30} />
        </>
      ),
      href: "https://linkedin.com",
      title: "Why does the earth get hotter ( explained for beginners and experts ) ?",
      style: "shadow-black",
    },
    {
      id: 2,
      src: AiFillBook,
      child  : (
        <>
           <AiFillBook size={30} />
        </>
      ),
      href: "https://linkedin.com",
      title: "What is the Club of Rome ?",
      style: "shadow-black",
    },
    {
      id: 3,
      child  : (
        <>
           <BsCodeSlash size={30} />
        </>
      ),
      href: "https://linkedin.com",
      src: BsCodeSlash,
      title: "Is it really that bad w. our earth ?",
      style: "shadow-black",
    },
    {
      id: 4,
      src: GiMeditation,
      child  : (
        <>
           <GiMeditation size={30} />
        </>
      ),
      href: "https://linkedin.com",
      title: "Work for a better future w. a healthy earth ( motivation and incentive ) ?",
      style: "shadow-black",
    },
  ]


  return (
    <div className=" flex flex-col bg-white text-black justify-center text-center w-screen h-full">
      
      <div>
        <h1 data-aos="fade-up" className="text-6xl sm:text-7xl font-bold text-center pt-16 
         mb-16 ">Climate change </h1>
        <p data-aos="fade-up" className="text-2xl  shadow-xl shadow-black leading-[50px] sm:leading-[70px]
        text-center mb-24 py-8 mx-8 px-4  sm:mx-48 ">We did some cool things in the last century. Things that are 
        almost impossible to comprehend. We are able to move at 100 mph and fly around the globe. We can talk to anybody
        and we even were on a (satellite) planet. But in doing so, we exploided our own habitat. Our resscoures are 
        not all endless and we have to find solutions to the emerging problems. Well, lets look at some ! </p>
      </div>

     <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-24 text-center mb-8  py-12 px-12 sm:px-32">
          {techs.map(({ id, href, child, title, style }) => (
            <div
              key={id}
              
              className={`shadow-md hover:scale-105 duration-500 py-4 bg-black text-white
               hover:text-black
               hover:bg-white rounded-lg mx-4 px-2  sm:mx-16 ${style}`}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center'
              ><a>{child}</a></a>
              <p className="mt-4 mb-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>


    </div>
  )
}

export default index