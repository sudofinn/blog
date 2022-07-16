import React from 'react'
import Image from "next/image"

import ManStanding from "../../assets/ManStandingWhyBlogPrim.svg"

const WhyBlog: React.FC = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <h1 className="text-5xl text-center mt-16">Why creating a blog?</h1>
            <p className="text-black  text-3xl text-center mt-8 mx-16 sm:mx-32  leading-[60px]">I generally just love the idea of having something on the internet where
                 people can get value from. It might not be a lot since I am not even close to
                  being an expert at anything I talk about. However, I still believe that it 
                  is worth it and maybe it will even help somebody.    </p>
            <Image className=" " src={ManStanding} alt="Man Standing" />
        </div>
    </div>
  )
}

export default WhyBlog