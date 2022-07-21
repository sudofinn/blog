import React from 'react'
import Image from "next/image"
//import {useRouter} from "next/router"
import LampDark from "../../assets/LampStandingDarkPrim.svg"

const TinyImprov = () => {
    //const router = useRouter()

    const transferNewIdeaPage = () => {
      window.open("/newidea")
    }

  
  return (
    <div className="h-full w-full bg-white">

        <section className="relative">

        <div className="custom-shape-divider-top-1657996595">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
      </div>

        <div className="max-w-screen-lg mx-auto mt-16 pt-24 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2  data-aos="fade-down" className="text-5xl mb-8 text-center sm:text-7xl hover:scale-110 duration-500 font-bold text-black mr-[16px]">
            A TINY Improvement
          </h2>


          <div className="float-left sm:flex mx-auto  sm:mx-4">
            <button onClick={transferNewIdeaPage} className="text-white border-8 border-white mx-[-10px]   hover:border-black  bg-black  hover:text-black hover:bg-white  
            flex items-center  max-w-lg px-8 py-4 my-8  rounded-md hover:scale-110 duration-300 ">
                New Ideas
              </button>
        </div>
          
          <p data-aos="fade-down" className="text-black px-8 text-center sm:text-left sm:px-2 py-6 mb-16 max-w-lg text-2xl leading-[60px] ">
            I like the idea of getting slightly better everyday. Consistency, I think, is the most  important skill 
            one can ever have. That `s why I think it is ok to only improve slighly each day. But it `s incredibly 
            important to  improve  every day.
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