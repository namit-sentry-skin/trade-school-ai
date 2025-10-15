import { useState } from 'react'
import { Check } from 'lucide-react'
import '../styles/Demo.css'

const Demo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to help you learn about our HVAC certification program. What would you like to know?"
    }
  ])

  const quickQuestions = [
    "What programs do you offer?",
    "How long is the program?",
    "What's the cost?",
    "Job placement rate?"
  ]

  const handleQuickQuestion = (question) => {
    setMessages([...messages, 
      { type: 'user', text: question },
      { 
        type: 'bot', 
        text: getBotResponse(question)
      }
    ])
  }

  const getBotResponse = (question) => {
    const responses = {
      "What programs do you offer?": "We offer HVAC, Electrical, Plumbing, and Welding certification programs. Each is accredited and designed to get you job-ready in 6-12 months.",
      "How long is the program?": "Our programs range from 6-12 months depending on the trade. You can attend full-time or part-time to fit your schedule.",
      "What's the cost?": "Tuition ranges from $12,000-$18,000. We offer financial aid, payment plans, and many students qualify for grants that cover 50-100% of costs.",
      "Job placement rate?": "91% of our graduates are employed within 6 months of completion. We have partnerships with over 200 local employers."
    }
    return responses[question] || "That's a great question! I'd love to connect you with an admissions counselor who can provide detailed information. What's the best number to reach you?"
  }

  return (
    <section id="demo" className="demo section">
      <div className="container">
        <h2 className="section-title">See It In Action</h2>
        <p className="section-subtitle">
          Experience how our AI engages with prospective students
        </p>
        <div className="demo-container">
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-status">
                <div className="status-dot"></div>
                <span>AI Assistant Online</span>
              </div>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <div className="message-bubble">
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-quick-replies">
              <p className="quick-replies-label">Try asking:</p>
              <div className="quick-replies-grid">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="demo-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <div className="benefit-content">
                <h3>Natural Conversations</h3>
                <p>Feels like talking to a real person, not a bot</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <div className="benefit-content">
                <h3>Instant Answers</h3>
                <p>No waiting for email responses or callbacks</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <div className="benefit-content">
                <h3>Qualified Leads</h3>
                <p>Identifies serious candidates automatically</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Check size={32} strokeWidth={2.5} />
              </div>
              <div className="benefit-content">
                <h3>Seamless Handoff</h3>
                <p>Transfers to admissions when prospects are ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo

