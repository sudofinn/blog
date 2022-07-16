import React from 'react'
import Image from "next/image"
import LampDark from "../../assets/LampStandingDarkPrim.svg"

const TinyImprov = () => {
    // make black wave ( other direciton than first w. tool , like on figma file overall design)
    //last section, do the animated kute bubble
  return (
    <div className="h-full w-full bg-white">

        <section className="relative">

        <div className="custom-shape-divider-top-1657996595">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        <div className="max-w-screen-lg mx-auto mt-16 pt-24 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl mb-8 text-center sm:text-7xl font-bold text-black mr-[16px]">
            A TINY Improvement
          </h2>
          <p className="text-black px-2 py-6 max-w-lg text-2xl leading-[60px]">
            I like the idea of getting slightly better everyday. Consistency, I think, is the most  important skill 
            one can ever have. That ´s why I think it is ok to only improve slighly each day. But you got to improve 
            every day.
          </p>

          
        </div>

        <div>
          <Image
            src={LampDark}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>

        </section>
      
    </div>
  );
  
}

export default TinyImprov