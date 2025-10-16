import { ArrowRight, Calendar, Check } from 'lucide-react'
import '../styles/CTA.css'

const CTA = () => {
  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Boost Your Enrollment?</h2>
          <p className="cta-description">
            Join 150+ vocational trade schools already using AI to increase enrollments. 
          </p>
          <div className="cta-buttons">
            <a href="https://calendly.com/anishabhandari/book-a-sentry-skin-demo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
              Schedule Demo
              <Calendar size={20} />
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-feature-icon">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Understand your students better</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Filter in high quality leads</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Save enrollment officers' time</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-background"></div>
    </section>
  )
}

export default CTA

