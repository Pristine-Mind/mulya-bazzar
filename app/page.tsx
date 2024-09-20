import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
    </div>
  )
}

export default Home
