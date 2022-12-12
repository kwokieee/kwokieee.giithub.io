import './App.css'
import NavBar from './components/NavBar'
import Intro from './sections/Intro'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Intro />
      <Skills />
      <Work />
      <Projects />
    </div>
  )
}

export default App
