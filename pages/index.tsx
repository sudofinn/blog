import type { NextPage } from 'next'
import Header from '../components/home/Header'
import About from '../components/home/About'
import Topics from '../components/home/Topics'
import WhyBlog from '../components/home/WhyBlog'
import TinyImprov from '../components/home/TinyImprov'
import FindMe from '../components/home/FindMe'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Topics />
      <WhyBlog />
      <TinyImprov />
      <FindMe />

    </div>
  )
}

export default Home
