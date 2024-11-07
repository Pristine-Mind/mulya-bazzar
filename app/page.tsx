import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import DiscipleMakingProcess from './components/DiscipleMakingProcess'
import DashBoardManagement from './components/DashBoardManagement'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <DiscipleMakingProcess />
      <Features />
      <DashBoardManagement />
      <Contact />
    </div>
  )
}

export default Home
