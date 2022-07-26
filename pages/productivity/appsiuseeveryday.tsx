import React from 'react'
import useDarkMode from '../../components/hooks/useDarkMode'

import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const AppsEveryday = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  
  //this page has a yellow colorscheme

  return (
    <div className="w-full h-full px-6 dark:bg-white dark:text-orange-400 bg-black p-4 text-orange-400">
      <h1 data-aos="fade-up"  className="text-center  text-8xl mt-12 mb-16 ">Apps I use Everyday</h1>

      <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>
      
      <div className="border-l  ">
      <p className="text-white text-2xl px-6 font-blog  sm:px-64  dark:text-black leading-[50px] ">
    Apps have become so important to our everyday life. We simply can not life without them.
    And I am not even talking about  sth like <span className="text-orange-300">TikTok</span> or
     <span className="text-orange-300"> Instagram</span>, there are also plenty of useful apps
    that just facilitate our life so damn much to a point where a day can just fly by on autipilot.
    While this is not something you always want, I think all of us can say that there are certain apps
    which basically extend ourself and help us life a better life.</p>

      </div>

    <p className="text-white text-2xl mt-12 font-blog px-6 sm:px-64 dark:text-black leading-[50px]">
      In this post, I quickly want to share the Apps I use everyday and also <span className="text-orange-300">WHY</span> I use them ( people who read my
       article on the summary of Simon Sinek “Start with why“ will understand why I emphasize the why:).</p>

    <p className="text-white text-2xl mt-12 font-blog px-6 sm:px-64 dark:text-black leading-[50px]">
      Alright, lets started with where I organise my life.
    Yes, I am talking about <a target="_blank" rel="noreferrer" href="https://www.notion.so/" className="text-orange-300">Notion</a>. For those of you who have not heard about it, 
    Notion is a  <span className='text-orange-300'>free note taking App </span>which can do pretty much everything. 
    If I say “organising my life“ I mean exactly that. In fact, I am even writing this script right now in Notion.
    I use Notion because it is …</p>

    <ul className="text-white text-2xl mt-2  px-6 font-blog sm:px-64  dark:text-black leading-[50px]">
      <li className="bg-orange-400 p-2  text-black"> 1.  free ( atleast the basic version)</li>
      <li className="bg-orange-400 p-2  text-black"> 2.  one can have infinitely subpages</li>
      <li className="bg-orange-400 p-2  text-black"> 3.  it is very easy and fast to make a. beautiful looking page ( with loads of shortcuts)</li>
      <li className="bg-orange-400 p-2  text-black"> 4.  One can integrate almost any app in it ( embed sth. like pdfs, websites, repl, github, slack or even html )</li>
    </ul>


    </div>
  )
}

export default AppsEveryday