import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <GraduationCap className="logo-icon" size={32} />
          <span className="logo-text">TradeSchool AI</span>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#features" className="navbar-link">Features</a>
          <a href="#demo" className="navbar-link">Demo</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

