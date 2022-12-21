import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="text-center">
      {/* <NavBar /> */}
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
