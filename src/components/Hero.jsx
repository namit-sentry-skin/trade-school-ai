import { Sparkles, ArrowRight, Play } from 'lucide-react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            AI-Powered Enrollment Solutions
          </div>
          <h1 className="hero-title">
            Transform Conversations Into <span className="gradient-text">Enrollments</span>
          </h1>
          <p className="hero-description">
            Boost your vocational trade school enrollment rates by up to 3x with our intelligent conversational AI agent. 
            Replace static forms with engaging, personalized conversations that convert.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-large">
              Watch Demo
              <Play size={20} />
            </button>
          </div>
          <div className="hero-stats-inline">
            <div className="stat-inline">
              <span className="stat-value">3x</span>
              <span className="stat-label">Conversion Rate</span>
            </div>
            <div className="stat-inline">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Availability</span>
            </div>
            <div className="stat-inline">
              <span className="stat-value">85%</span>
              <span className="stat-label">Lead Quality</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-container">
            <img 
              src="/assets/dashboard plus chat.svg" 
              alt="AI Dashboard with Chat Interface" 
              className="dashboard-image"
            />
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </section>
  )
}

export default Hero

