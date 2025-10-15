import { Users, School, TrendingUp, Bot } from 'lucide-react'
import '../styles/Stats.css'

const Stats = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Students Enrolled',
      icon: Users
    },
    {
      number: '150+',
      label: 'Trade Schools',
      icon: School
    },
    {
      number: '3x',
      label: 'Higher Conversion',
      icon: TrendingUp
    },
    {
      number: '24/7',
      label: 'AI Availability',
      icon: Bot
    }
  ]

  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="stat-card">
                <Icon className="stat-icon" size={48} strokeWidth={1.5} />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats

