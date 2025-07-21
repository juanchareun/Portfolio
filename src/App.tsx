import React from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lock-icon">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
            </svg>
            <span className="logo-text">Juan Chareun</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-name">Juan Chareun</h1>
            <h2 className="hero-subtitle">IT Student</h2>
            
            <p className="hero-description">
              Aspiring tech professional focused on ethical hacking, Linux, and network 
              security. I share hands-on labs and document my learning to contribute to the 
              cybersecurity community.
            </p>

            <div className="hero-buttons">
              <a 
                href="https://github.com/juanchareun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button github-button"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/juan-chareun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button linkedin-button"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&to=juanignaciochareun@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button email-button"
                title="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <a href="#about" className="scroll-arrow">
              <ChevronDown size={24} />
            </a>
          </div>

          <div className="hero-visual">
            <div className="terminal-mockup">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                </div>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="prompt">juanchareun@portfolio:~$</span> whoami
                </div>
                <div className="terminal-output">IT Student & Ethical Hacker</div>
                <div className="terminal-line">
                  <span className="prompt">juanchareun@portfolio:~$</span> ls skills/
                </div>
                <div className="terminal-output">
                  Python  Bash  Linux  Docker  Git
                </div>
                <div className="terminal-line">
                  <span className="prompt">juanchareun@portfolio:~$</span> cat focus.txt
                </div>
                <div className="terminal-output">
                  Cybersecurity • Network Security • Ethical Hacking
                </div>
                <div className="terminal-line">
                  <span className="prompt">juanchareun@portfolio:~$</span> <span className="cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">About me</h2>
            <p className="section-description">
            </p>
          </div>

          <div className="about-content">
            <div className="about-card">
              <h3 className="about-card-title">Aspiring cybersecurity professional focused on ethical hacking.</h3>
              <p className="about-card-subtitle">Juan Chareun • Student at Valencia College</p>
              
              <div className="about-details">
                <div className="detail-item">
                  <h4>Education</h4>
                  <p><strong>Valencia College - Associate Degree focused on Informational Technology</strong></p>
                  <p className="detail-period">2023 - Present</p>
                  <p>Focused on software development, databases, cloud computing, and networking.</p>
                </div>
                
                <div className="detail-item">
                  <h4>Focus Areas</h4>
                  <p>Aspiring tech professional focused on ethical hacking, Linux, and network security. I share hands-on labs and document my learning to contribute to the cybersecurity community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Have a project or opportunity</h2>
          <h2 className="contact-title">you would like to discuss?</h2>
          <p className="contact-description">
            Why not send me an email or message via LinkedIn.
          </p>
          
          <div className="contact-buttons">
            <a 
              href="https://mail.google.com/mail/?view=cm&to=juanignaciochareun@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              Email me
            </a>
            <a 
              href="https://linkedin.com/in/juan-chareun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button outline"
            >
              Message me on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">juan.chareun</div>
          <div className="footer-links">
            <a 
              href="https://mail.google.com/mail/?view=cm&to=juanignaciochareun@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a href="https://github.com/juanchareun" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/juan-chareun" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;