import type { NextPage } from 'next'
import {Fragment} from "react"
import Head from "next/head"

import Header from '../components/home/Header'
import About from '../components/home/About'
import Topics from '../components/home/Topics'
import WhyBlog from '../components/home/WhyBlog'
import TinyImprov from '../components/home/TinyImprov'
import FindMe from '../components/home/FindMe'

const Home: NextPage = () => {
  return (
    <Fragment>
    <Head>
      <title>A Tiny Improvement</title>
      <meta name="description" content="A Tiny Improvement, a blog made by Finn Guha." />
      <meta name="description" content="Climate change, a subsection from the blog A Tiny Improvement. Made by Finn Guha." />

    </Head>

    <Header />
    <About />
    <Topics />
    <WhyBlog />
    <TinyImprov />
    <FindMe />

    </Fragment>
    
    

  )
}

export default Home
