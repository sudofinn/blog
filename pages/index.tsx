import type { NextPage } from 'next'
import Header from '../components/home/Header'
import About from '../components/home/About'
import Topics from '../components/home/Topics'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Topics />

    </div>
  )
}

export default Home
