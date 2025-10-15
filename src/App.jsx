import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Demo />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

