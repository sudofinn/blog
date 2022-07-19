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
      title: "Apps I use everyday",
      style: "shadow-white",
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
      title: "Hustle or chill ?",
      style: "shadow-white",
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
      title: "Is daily writing important ?",
      style: "shadow-white",
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
      title: "About following your passion",
      style: "shadow-white",
    },
  ]


  return (
    <div className="   flex flex-col bg-black text-white justify-center text-center w-screen h-full">
      
      <div>
        <h1 data-aos="fade-up" className="text-6xl sm:text-7xl font-bold text-center pt-16 
         mb-16 ">Productivity</h1>
        <p data-aos="fade-up" className="text-2xl  shadow-xl shadow-white leading-[70px]
        text-center mb-16  mx-16 px-8 sm:mx-32 ">This section is dedicated to all the stuff around Productivity. 
          I talk about what I ( and what science ) thinks is important to do for living 
          productively. This covers a wide range from useful apps to deep questions
          like whether one should hustle or chill. Enjoy reading.
        </p>
      </div>

     <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16 text-center mb-8 py-12 px-20 sm:px-8">
          {techs.map(({ id, href, child, title, style }) => (
            <div
              key={id}
              
              className={`shadow-md hover:scale-105 duration-500 py-2 text-white hover:text-black
               hover:bg-white rounded-lg mx-4 px-2 sm:mx-16 ${style}`}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center'
              ><a>{child}</a></a>
              <p className="mt-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>
      
      <div>
      </div>


    </div>

  )
}

export default index