import { GraduationCap, Twitter, Linkedin, Facebook, Instagram, Heart } from 'lucide-react'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <GraduationCap className="logo-icon" size={32} />
              <span className="logo-text">TradeSchool AI</span>
            </div>
            <p className="footer-tagline">
              Transforming enrollment for vocational trade schools with AI-powered conversations
            </p>
          </div>
          
          <div className="footer-links">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#demo">Demo</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} TradeSchool AI. All rights reserved.</p>
          <p className="footer-made">
            Made with <Heart size={14} style={{ display: 'inline', margin: '0 0.25rem' }} fill="currentColor" /> for vocational trade schools
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

