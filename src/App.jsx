import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [experienceVisible, setExperienceVisible] = useState([false, false, false, false])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Check if about section is visible
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        setAboutVisible(rect.top < window.innerHeight * 0.8)
      }
      
      // Check visibility of each experience item
      const experienceItems = document.querySelectorAll('.timeline-item')
      const newExperienceVisible = [...experienceVisible]
      
      experienceItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && !newExperienceVisible[index]) {
          newExperienceVisible[index] = true
        }
      })
      
      if (JSON.stringify(newExperienceVisible) !== JSON.stringify(experienceVisible)) {
        setExperienceVisible(newExperienceVisible)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [experienceVisible])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">fateh sandhu.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Fateh Sandhu</span>
          </h1>
          <p className="hero-subtitle">
            A software engineer leveraging tech to make his everyday life easier.
          </p>
        </div>
        <div 
          className="floating-element"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="geometric-shape"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className={`section-header ${aboutVisible ? 'reveal' : ''}`}>
            <h2>About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <img src="/swe.png" alt="Software Engineer Logo" className="uni-logo" />
              </div>
              <h3>work.</h3>
              <p>building scalable solutions used by billions worldwide. </p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <img src="/stl.png" alt="St Louis Logo" className="uni-logo" />
              </div>
              <h3>place.</h3>
              <p>st. louis, mo – where the arch stands tall</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <img src="/airplane1.png" alt="Airplane Logo" className="uni-logo" />
              </div>
              <h3>play.</h3>
              <p>traveling the world, one culture at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p>my professional journey in software development.</p>
          </div>
          <div className="timeline">
            <div className={`timeline-item slide-from-left ${experienceVisible[0] ? 'visible' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 - Present</div>
                <h3>Software Engineer II</h3>
                <h4>Mastercard</h4>
                <p>Work on APIs, Spring Batch jobs, and ETL pipelines for products used by billions worldwide; collaborate across teams, actively analyze every product request to deliver the best solutions, and continuously enhance monitoring to minimize application downtime.</p>
                <div className="skills-tags">
                  <span>Java</span>
                  <span>Spring</span>
                  <span>Spring Batch</span>
                  <span>Apache NiFi</span>
                  <span>Postgres</span>
                  <span>Oracle</span>
                  <span>Mixpanel</span>
                  <span>Splunk</span>
                </div>
              </div>
            </div>
            
            <div className={`timeline-item slide-from-right ${experienceVisible[1] ? 'visible' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Summer 2022</div>
                <h3>Software Engineer Intern</h3>
                <h4>NCR Corporation</h4>
                <p>Built a reporting program for user entitlements, activity, and cash flows, impacting 200,000+ business customers, accelerating the roadmap by 1 year, and closing a competitive gap.</p>
                <div className="skills-tags">
                  <span>Java</span>
                  <span>Spring</span>
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>MySQL</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
            
            <div className={`timeline-item slide-from-bottom ${experienceVisible[2] ? 'visible' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Spring 2022</div>
                <h3>Software Developer Intern</h3>
                <h4>First National Bank of Omaha</h4>
                <p>Redesigned the commercial credit card web app architecture and implemented scalable, high-performance microservices, enabling faster deployments and shorter troubleshooting times.</p>
                <div className="skills-tags">
                  <span>Java</span>
                  <span>Kotlin</span>
                  <span>Spring</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Single-Spa</span>
                  <span>Postman</span>
                </div>
              </div>
            </div>
            
            <div className={`timeline-item slide-from-scale ${experienceVisible[3] ? 'visible' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2022</div>
                <h3>Associate Software Developer</h3>
                <h4>Microsoft</h4>
                <p>Developed dashboards using Azure telemetry to monitor UI health, implemented alerting for critical low-performing environments, and automated self-healing for certain customer environments.</p>
                <div className="skills-tags">
                  <span>Azure Data Explorer</span>
                  <span>Power BI</span>
                  <span>Visual Studio (.NET)</span>
                  <span>SQL</span>
                  <span>Power Query</span>
                  <span>C#</span>
                  <span>Power Automate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Let's Create Something Amazing</h2>
            <p>Ready to bring your ideas to life? Let's connect!</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:fateh@sandhu.club">fateh@sandhu.club</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <p><a href="https://linkedin.com/in/fatehsandhu" target="_blank" rel="noopener noreferrer">linkedin.com/in/fatehsandhu</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <h4>GitHub</h4>
                  <p><a href="https://github.com/fsandhu" target="_blank" rel="noopener noreferrer">github.com/fsandhu</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Fateh Sandhu. Built with React and Copilot.</p>
        </div>
      </footer>
    </div>
  )
}

export default App