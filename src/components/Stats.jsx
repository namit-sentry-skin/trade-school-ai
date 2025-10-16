import { HeartPulse, ChefHat, Wrench } from 'lucide-react'
import '../styles/Stats.css'

const Stats = () => {
  const stats = [
    {
      number: '294,539',
      label: 'Barber, Cosmetology, and Esthetics Trade Schools',
      growth: '+3.3% growth',
      description: 'Prospects often have urgent career transition needs but face complex prerequisite requirements and financial aid navigation.',
      icon: HeartPulse
    },
    {
      number: '22,523',
      label: 'Culinary Arts Programs',
      growth: '+13.4% growth',
      badge: 'Fastest Growing',
      description: 'Despite strong demand, these schools struggle with prospect concerns about career earnings potential and need to demonstrate ROI quickly.',
      icon: ChefHat
    },
    {
      number: '8,932',
      label: 'Welding & Skilled Trades',
      growth: '+5.3% growth',
      description: 'These programs attract students from diverse educational backgrounds, requiring flexible communication approaches and financial counseling.',
      icon: Wrench
    }
  ]

  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">Why Trade Schools?</h2>
          <p className="stats-subtitle">These numbers represent the current enrollment across trade schools in America</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="stat-card">
                <Icon className="stat-icon" size={48} strokeWidth={1.5} />
                {stat.badge && <div className="stat-badge">{stat.badge}</div>}
                <div className="stat-number">{stat.number}</div>
                <div className="stat-growth">{stat.growth}</div>
                <div className="stat-text">{stat.label}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats

