import React from 'react'
import Head from "next/head"

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
    <div className="w-full h-full px-6  dark:bg-white dark:text-orange-400 bg-black  text-orange-400">

    <Head>
      <title>Apps I use Everyday</title>
      <meta name="description" content="Apps I use Everyday, a blogpost from the productivity section
       from the blog A Tiny Improvement. Made by Finn Guha." />
    </Head>

      <h1 data-aos="fade-up"  className="text-center  pt-12 text-7xl  mb-16 ">Apps I use Everyday</h1>

      <span onClick={handleMode} className="flex justify-center mb-12 hover:scale-110 duration-500">
        {darkTheme ? (
          <FaSun size='40' className='top-navigation-icon' />
        ) : (
          <FaMoon size='40' className='top-navigation-icon' />
        )}
      </span>
      
      <div className="border-l sm:border-hidden dark:border-black ">
      <p className="text-white text-2xl px-6 font-blog  sm:px-64  dark:text-black leading-[50px] ">
    Apps have become so important to our everyday life. We simply can not life without them.
    And I am not even talking about  sth like <span className="text-orange-400">TikTok</span> or
     <span className="text-orange-400"> Instagram</span>, there are also plenty of useful apps
    that just facilitate our life  to a point where a day can just fly by on autipilot.
    While this is not something you always want, I think all of us can say that there are certain apps
    which basically extend ourself and help us live a better life.</p>

      </div>

    <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
      In this post, I quickly want to share the Apps I use everyday and also <span className="text-orange-400">WHY</span> I use them ( people 
      who read   the book Simon Sinek “Start with why“ will understand why I emphasize the why:).</p>

    <p className="text-white text-2xl mt-12 font-blog px-6 sm:px-64 dark:text-black leading-[50px]">
      Alright, lets started with where I organise my life.
    Yes, I am talking about <a target="_blank" rel="noreferrer" href="https://www.notion.so/" className="text-orange-400">Notion</a>. For those of you who have not heard about it, 
    Notion is a  <span className='text-orange-400'>free note taking App </span>which can do pretty much everything. 
    If I say “organising my life“ I mean exactly that. In fact, I am even writing this script right now in Notion.
    I use Notion because it is …</p>

    <ul className="text-white text-2xl mt-2  px-6 font-blog sm:px-64  dark:text-black leading-[50px]">
      <li className="bg-orange-400 p-2  text-black"> 1.  free ( atleast the basic version)</li>
      <li className="bg-orange-400 p-2  text-black"> 2.  one can have infinitely subpages</li>
      <li className="bg-orange-400 p-2  text-black"> 3.  it is very easy to make a beautiful looking page</li>
      <li className="bg-orange-400 p-2  text-black"> 3.  It also supports syntax highlighting for many programming languages ( useful for coders)</li>
      <li className="bg-orange-400 p-2  text-black"> 4.  One can integrate almost many apps  in it ( embed sth. like pdfs, websites, repl, github, slack or even html )</li>
    </ul>

    <p className="text-white border-l  sm:border-hidden dark:border-black  text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">Notion is my second brain. I pretty much write everything down from what I need to get done today, to notes on school, programming, how to make money and even thinks like
       collecting nice quotes. Notion has it all.</p>


    <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">The next app is something 
    every student should know about and probably every student should also give a try. I am talking about <a target="_blank" rel="noreferrer" className="text-orange-400" href="https://apps.ankiweb.net/">Anki</a>.
 It is a free ( the mac version cost 27  Dollar on the appstore but otherwise it is free) flashcard app.
Anki uses spaced repitition and active recall to provide you with the greatest learning experience ( look up
 the terms if you are unfarmiliar about it, there are great posts about these mechanicsm but they basically use science
 to make you learn better).
 </p>
 <p className='text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]'>
  On the website, Anki claims that you can either... </p>

    <ul className="text-white text-2xl mt-2  px-6 font-blog sm:px-64  dark:text-black leading-[50px]">
      <li className="bg-orange-400 p-2  text-black"> …drastically reduce the time you spend studying and still get the same marks</li>
      <li className="bg-orange-400 p-2  text-black"> …or drastically improve your marks while studying the same amount of time</li>
      </ul>

  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
    Of course this does not only apply to school, anybody can use Anki regardless their age.
  The ecosystem is also something I love. Not only are their some great channels out there who teach you Anki 
  ( e.g. <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/TheAnKing" className="text-orange-400">The AnKing </a> 
  or the , in my opinion, best starter video from  <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=uLfczzq9z_8" className="text-orange-400">Zach Highley</a> ) , 
  but there are also plenty of decks for all kinds of things you can <a target="_blank" rel="noreferrer" 
  href="https://ankiweb.net/shared/decks/" className="text-orange-400">download  </a>and use for free. That ´s so cool !</p>

  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
    So, I am a student. So note taking is somewhat essential. And since I went digital about a year ago, I wrote and am still writing
     every day on my iPad ( default, 8th gen iPad). </p>

  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
    For this, I use <a target="_blank" rel="noreferrer" href="https://www.goodnotes.com/" className="text-orange-400">GoodNotes</a>
    . It is honestly the best note taking app because ... </p>

    <ul className="text-white text-2xl mt-2  px-6 font-blog sm:px-64  dark:text-black leading-[50px]">
      <li className="bg-orange-400 p-2  text-black"> … it has a beautiful UI</li>
      <li className="bg-orange-400 p-2  text-black"> … has a variety of versatile features</li>
      <li className="bg-orange-400 p-2  text-black"> … everybody in my school uses it so teachers can send .goodnotes 
      files fairly easily</li>
      </ul>


  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
    There is also  <a target="_blank" rel="noreferrer" 
    href="https://notability.com"  className="text-orange-400">Notability </a>. It is another solid note taking app. However, I decided to go with GoodNotes. 
    It costs around 10 Dollars. Note that both are only available for the apple ecosystem. </p>

  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">I love reading books. They are just something magical. But believe me or not, I to not have time do read every book I want to . Therefore, using an app which has loads
     of summaries from books is helpful. I use <a target="_blank" rel="noreferrer" 
    href="https://www.getstoryshots.com/"  className="text-orange-400">StoryShots </a>for this. It costs 36 Dollar but I think it is worth the price.
  With it, you get summaries in the form of plain notes or summaries in some kind of visual image. There are also podcasts to many books.
  Some books are even available as a whole but this only for a few. All in all, one can say that Storyhots is really great. I have read 
  probably around 50 summaries on it already. The best ones come into my To be read list on Notion where I eventually will be pick them up
    and buy the whole book ( either the digial version or a hardcopy).</p>


  <p className="text-white text-2xl mt-12 font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">Lastly, we have got another kind of app, I am sure you heard of it, 
  it is actually a search engine and called <a target="_blank" rel="noreferrer" 
    href="https://www.ecosia.org/"  className="text-orange-400">Ecosia </a> . Yes, the one which plants
       trees when you google. Super cool. I use this whenever I need to google something ( which happens fairly often actually). With this, one can do
     also something good ( at least not bad) for the envionrment which is super nice.
    Also, the engine itself is good. Whenever I need some better serach results, I just switch to google which only takes a mircosecond.</p>

  <p className="text-white text-2xl mt-12 border-l sm:border-hidden dark:border-black font-blog  mb-16  px-6 sm:px-64 dark:text-black leading-[50px]">
    Alright, these were my top apps I  use everyday. I hope you learned something and maybe start using some of the apps too.
    But please think about this: These apps are just there to facilitate our work. However, in order for that to be working, one needs to
     be working    in the first place.</p>


    <p className="text-orange-400 dark:text-orange-400  text-2xl mt-12 font-quote    px-6 sm:px-64 dark:text-black leading-[50px]">
      Thanks for reading! Maybe, this was a tiny improvement to your day.</p>

     




    </div>
  )
}

export default AppsEveryday