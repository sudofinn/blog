import React from 'react'
import useDarkMode from '../../components/hooks/useDarkMode'
import {useRouter} from "next/router"

import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const WorkForBetterFutureAndHealthyEarth = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  const router = useRouter()
  const navigatePrev = () => {
    router.push("/climatechange")
  }
  //add metatags

  return (
    <div className="w-full h-screen px-6 dark:bg-white dark:text-black bg-black p-4 text-white">
      <h1   data-aos="fade-up" className="text-center  text-7xl mt-12 mb-16 ">Still in production</h1>

      <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>

      <button onClick={navigatePrev} className="text-black mt-8 shadow-md hover:shadow-white bg-white dark:bg-black
         dark:text-white hover:bg-black hover:text-white px-10 py-6
            my-8 mx-auto flex  items-center text-2xl rounded-md hover:scale-110 duration-300 mb-8">
            Back to previous page
        </button>

    </div>
  )
}

export default WorkForBetterFutureAndHealthyEarth