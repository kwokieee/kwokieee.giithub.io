import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="text-center bg-[#eeeeee]">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default App
