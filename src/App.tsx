import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Hero />
      <Skills />
      <Work />
      <Projects />
    </div>
  )
}

export default App
