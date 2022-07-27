import React from 'react'
import Link from "next/link"
import Head from "next/head"

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
      href: "/whatithink/everybodyhatewhatdoing",
      title: "Why does everybody hate what they are doing ?",
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
      href: "/whatithink/whatmakesgoodlife",
      title: "What makes a 'good life' ?",
      style: "shadow-black dark:shadow-white",
    },
    {
      id: 3,
      child  : (
        <>
           <BsCodeSlash size={30} />
        </>
      ),
      href: "/whatithink/fearstayingaverage",
      src: BsCodeSlash,
      title: "The fear of staying average",
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
      href: "/whatithink/quitorcontinue",
      title: "Quit or continue ? ",
      style: "shadow-black dark:shadow-white",
    },
  ]


  return (
    <div className=" dark:bg-black dark:text-white flex flex-col bg-white text-black justify-center text-center w-screen h-full">

    <Head>
      <title>What I think</title>
      <meta name="description" content="What I think, a subsection from the blog A Tiny Improvement. Made by Finn Guha." />

    </Head>
      
      <div>
        <h1 data-aos="fade-up" className="text-6xl sm:text-7xl font-bold text-center pt-16 
         mb-16 ">Me and what I think</h1>

          <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>

        <p data-aos="fade-up" className="text-2xl dark:shadow-white shadow-xl shadow-black leading-[50px] sm:leading-[70px]
        text-center mb-24 py-8 mx-8 px-4  sm:mx-48 ">This is somewhat more of a direct chapter, here I talk solely 
        about what I think of certain technologies/trends etc. Furthermore, I also talk about myself a bit more and give
         you an insight of what my life looks like..</p>
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

export default Index