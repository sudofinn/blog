import React from 'react'

import MdOutlineWork from "react-icons/md"
import AiFillBook from "react-icons/ai"
import BsCodeSlash from "react-icons/bs"
import GiMeditation from "react-icons/gi"
import IoMdChatbubbles from "react-icons/io"
import GiDeadWoodBsFlower1 from "react-icons/gi" 
import GiWideArrowDunk from "react-icons/gi"

const Topics: React.FC  = () => {
  const techs = [
    {
      id: 1,
      src: MdOutlineWork,
      title: "Productivity",
      style: "shadow-white",
    },
    {
      id: 2,
      src: AiFillBook,
      title: "All about books",
      style: "shadow-white",
    },
    {
      id: 3,
      src: BsCodeSlash,
      title: "Programming",
      style: "shadow-white",
    },
    {
      id: 4,
      src: GiMeditation,
      title: "Meditation & Peace",
      style: "shadow-white",
    },
    {
      id: 5,
      src: IoMdChatbubbles,
      title: "Me and what I think",
      style: "shadow-white",
    },
    {
      id: 6,
      src: GiDeadWoodBsFlower1,
      title: "Climate change",
      style: "shadow-white",
    }
   
  ];

  return (
    <section className="bubble relative ">
      
      <div className="max-w-screen-lg mx-auto pt-[370px] flex flex-col justify-center text-center w-full h-full">
        <div>
          <p className="  text-5xl sm:text-6xl  mt-32 text-white font-bold border-b-4 border-white p-2 inline">
            Topics
          </p>
          <p className="hidden md:flex justify-center py-8 text-2xl text-white ">Lets have a look at what I write</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16 text-center text-white py-12 px-20 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div> 
    </section>

  )
}

export default Topics