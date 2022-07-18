import React from 'react'
import Image from "next/image"

import ManStanding from "../../assets/ManStandingWhyBlogPrim.svg"

const WhyBlog: React.FC = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <h1 data-aos="fade-up-left" className="text-5xl  hover:scale-110 duration-500 text-center mt-32">Why creating a blog?</h1>
            <p data-aos="fade-up-left" className="text-black  text-2xl text-center mb-12 mt-8 mx-16 sm:mx-48 leading-[60px]">I generally love   having something on the internet where
                 people can get value from. It might not be a lot since I am not even close to
                  being an expert at anything I talk about. However, I still believe that it 
                  is worth it and maybe it will even help somebody.    </p>
            <Image className=" " src={ManStanding} alt="Man Standing" />
        </div>
    </div>
  )
}

export default WhyBlog