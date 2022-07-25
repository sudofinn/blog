import React from 'react'
import Link from "next/link"
import useDarkMode from '../../components/hooks/useDarkMode'

import {MdOutlineWork} from "react-icons/md"
import {AiFillBook} from "react-icons/ai"
import{BsCodeSlash} from "react-icons/bs"
import { GiMeditation} from "react-icons/gi"

import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Index = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

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
      style: "shadow-black dark:shadow-white",
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
      style: "shadow-black dark:shadow-white",
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
      style: "shadow-black dark:shadow-white",
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
      style: "shadow-black dark:shadow-white",
    },
  ]


  return (
    <div className="  dark:bg-black dark:text-white  flex flex-col bg-white text-black justify-center text-center w-screen h-full">

      

      
      <div>
        <h1 data-aos="fade-up" className="text-6xl sm:text-7xl font-bold text-center pt-16 
         mb-16 ">Productivity</h1>
        
          <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>


        <p data-aos="fade-up" className="text-2xl dark:shadow-white shadow-xl shadow-black leading-[50px] sm:leading-[70px]
        text-center mb-24 py-8 mx-8 px-4 sm:mx-48 ">This section is dedicated to all the stuff around Productivity.
          I talk about what I ( and what science ) thinks is important to do for living 
          productively. This covers a wide range from useful apps to deep questions
          like whether one should hustle or chill. Enjoy reading.
        </p>
      </div>

     <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-24 text-center mb-8 py-12 px-12 sm:px-32">
          {techs.map(({ id, href, child, title, style }) => (
            <div
              key={id}
              
              className={`shadow-md hover:scale-105 duration-500 py-4 bg-black text-white hover:text-black
               hover:bg-white rounded-lg mx-4 px-2 sm:mx-16 ${style}`}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center'
              ><a>{child}</a></a>
              <p className="mt-4 mb-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>
      
      <div>
      </div>


    </div>

  )
}

export default Index