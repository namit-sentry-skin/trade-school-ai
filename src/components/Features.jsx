import { Bot, Zap, Target, BarChart3, Link2, Globe } from 'lucide-react'
import '../styles/Features.css'

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chat',
      description: 'Intelligent conversational AI that understands prospective students and guides them through the enrollment process naturally.'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: '24/7 availability ensures no lead goes cold. Engage prospects immediately, even outside business hours.'
    },
    {
      icon: Target,
      title: 'Qualification',
      description: 'Smart qualification system identifies serious candidates and routes them to your admissions team.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into conversations, conversion rates, and student preferences to optimize your strategy.'
    },
    {
      icon: Link2,
      title: 'CRM Integration',
      description: 'Seamlessly integrates with your existing systems. Salesforce, HubSpot, and custom CRMs supported.'
    },
    {
      icon: Globe,
      title: 'Multi-Channel',
      description: 'Deploy across your website, SMS, WhatsApp, and Facebook Messenger with one platform.'
    }
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">What do you get?</h2>
        <p className="section-subtitle">
          Everything you need to transform how you connect with prospective students
        </p>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="feature-card">
                <Icon className="feature-icon" size={48} strokeWidth={1.5} />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

