import React from 'react'
import Image from "next/image"
import WomenSittingHeader from "../../assets/WomenSittingHeaderPrim.svg"

const Header : React.FC = () => {
  return (
    <div>
        <section className=" relative flex flex-col">
            
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl header-animate font-bold  flex justify-center ml-6 my-8'>A Tiny Improvement</h1>

                <div className="typewriter flex justify-center">
                  <p className="text-center text-sm sm:tracking-widest  px-8 sm:text-2xl font-quote ">...because daily improvements over time create stuning results </p>
                </div>
               
               <div className="">
                <p className="text-center my-8 text-md header-p-animate sm:text-2xl ">-Robin S. Sharma</p>

               </div>


                <Image className="flex justify-center  "  height={350}    src={WomenSittingHeader} alt="Women" />
                
                
                <div className="sm:mt-[300px] mt-[400px]">
                    <div className="custom-shape-divider-bottom-1657960008 ">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                         className="shape-fill"></path>
                    </svg>
               </div>

                </div>
                   
  

                


            </section>



    </div>


  )
}

export default Header