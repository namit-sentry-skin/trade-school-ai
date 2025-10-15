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
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#demo">Demo</a>
              <a href="#pricing">Pricing</a>
              <a href="#integrations">Integrations</a>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#help">Help Center</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#api">API</a>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security</a>
              <a href="#gdpr">GDPR</a>
            </div>
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

