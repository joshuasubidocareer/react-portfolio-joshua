import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        {/*<About />*/}
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App