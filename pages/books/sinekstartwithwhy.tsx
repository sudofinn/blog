import React from 'react'
import Head from "next/head"

import useDarkMode from '../../components/hooks/useDarkMode'


import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Sinekstartwithwhy = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);


  return (
    <div className="w-full h-full px-6  dark:bg-white dark:text-red-500 bg-black  text-red-500">

    <Head>
      <title>Simon Sinek - Start with why  ( summary)</title>
      <meta name="description" content="Simon Sinek - Start with why , a blogpost  from the blog A Tiny Improvement. Made by Finn Guha." />
    </Head>

       <h1 data-aos="fade-up"  className="text-center  pt-12 text-7xl  mb-16 ">Simon Sinek - Start with why</h1>

      <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>

      <p className="text-white border-l dark:border-black sm:border-hidden text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">
        In the book “Start with why“ , <a target="_blank" rel="noreferrer" href="https://simonsinek.com/"
         className="text-red-500">Simon Sinek</a> brilliantly explains why starting with why is
         literally the best thing a business can do for itself and the best thing every individual 
         can do to wake up with inspiration and passion , go to bed fullfilled and also be really 
         successful at his/her carrer.</p>

    <p className="text-white  mt-12 text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">He uses the golden circle  to underline his hypothesis. It has at it´s core the WHY,  then there is 
        the HOW and lastly the WHAT . 
        Sinek uses this analogy throughout the book and states  that our brain i
        s also structured like this ( limbic brain = why, neocortex = what). It is hard to articulate the why 
        because the limbic brain does not contain any speech receptors.  </p>


    <p className="text-white  mt-12  text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">However, the Golden circle must be used. At it ´s base, there is the why which is not frequently used
       but the most important aspect.
    To underline this, he uses <a target="_blank" rel="noreferrer" href="https://www.apple.com/"
         className="text-red-500">Apple</a>, <a target="_blank" rel="noreferrer" href="https://www.harley-davidson.com/ca/en/index.html"
         className="text-red-500">Harley Davidson</a> and <a target="_blank" rel="noreferrer"
          href="https://www.southwest.com/"
         className="text-red-500">Southwest Airlines</a> as examples.
    They all have a clear why ,a culture and have therefore long lasting success.
    They hire already motivated people and inspire them.
    For example, Dell said that at an advertisement some time ago that their MP3 player, which was back then a revolutionary device , has “2GB storage“ .
    Apple had the same MP3- player with identical or even worse quality, but they said that with their player one has “1000 Songs in your pocket“. 
    Simply because Apple defined itself as a company that starts with why ( to challenge the status quo, the big companies) and simplifying their
    advertisement to make it something tangible, something everbody can understand , they won over Dell. Dell , by the way, even started before Apple,  
    but failed in the end in this particular industry ( of MP3-players).</p>


    <p className="text-white  mt-12  text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">Sinek also uses the why and the how-type person and how they fit together to form a productive relationship at work.
    <a target="_blank" rel="noreferrer" href="https://de.wikipedia.org/wiki/Steve_Jobs"
         className="text-red-500">Steve Jobs</a>  for example, is a why-type , a visonar  and <a target="_blank" rel="noreferrer" 
         href="https://de.wikipedia.org/wiki/Steve_Wozniak"
         className="text-red-500">Steve Wozniak</a> ( his business partner who invented the Apple I Computer ) is a how-type. 
    They both complement each other. Without the other person, they both would have not succeeded. Sineks important quote says : “Start with why but know  how“.
    Furthermore, one should use  the golden circle to build trust and loyal customers. The golden Circle should be aligned ( The WHY, HOW, WHAT  should be equally represented).
    The WHY of a company should never become fuzzy even though this might be hard when it is a big company. Many , or even all comanies , started with a clear why, but as the
    company grew and the boss could not communicate with the whole team , they started abandonning the WHY to only focus on making more revenue.
    </p>
    
    <p className="text-white  mt-12  text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">Moreover, Simon Sinek believes that many companies make wrong advertisement. 
The Law of Diffusion of Innovation states that you should solely focus on the Innovators (2.5% the population) and the early adopters ( 13% of the population),
 do not focus on the mass market, only on these and the rest will follow eventually. This is another key concept.
Lastly, one should only  compete with yourself because then everybody is going to help you ( We want to be better every day, not better than the other companies). 
( The idea of only competing against yourself is widespread  and many successful people admit that it helped them.)</p>

<p className="text-white border-l mt-12 dark:border-black sm:border-hidden text-2xl px-6 font-blog  
      sm:px-64  dark:text-black leading-[50px]">All in all, Sinek offers pratical ways to make the life of your company and also your own life more fullfilling simply by starting with why.
I especiallly like that he took so much time to explain his thoughts over  and over again, so at the end, one still  knew almost every single detail.
If you want to get a deep dive into the book, consider buying the full book.</p>


    <p className="text-red-500 dark:text-red-500 text-2xl mt-12 font-quote    px-6 sm:px-64 dark:text-black leading-[50px]">
      Thanks for reading! Maybe, this was a tiny improvement to your day.</p>

    </div>
  )
}

export default Sinekstartwithwhy