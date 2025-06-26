"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Terminal, ChevronDown, ExternalLink, Code2, Calendar } from "lucide-react"
import "./App.css"

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    "Operating Systems & Shell": [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        color: "text-orange",
      },
      {
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        color: "text-green",
      },
    ],
    "Networking & Tools": [
      {
        name: "Wireshark",
        icon: "https://www.wireshark.org/assets/icons/wireshark-fin.png",
        color: "text-blue",
      },
      {
        name: "Nmap",
        icon: "https://nmap.org/images/nmap-logo-256x256.png",
        color: "text-red",
      },
      {
        name: "Burp Suite",
        icon: "https://portswigger.net/content/images/logos/burp-suite-logo.svg",
        color: "text-purple",
      },
    ],
    "Cybersecurity Platforms": [
      {
        name: "TryHackMe",
        icon: "https://assets.tryhackme.com/img/THMlogo.png",
        color: "text-emerald",
      },
    ],
    "Programming & Version Control": [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "text-yellow",
      },
      {
        name: "Git & GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "text-gray",
      },
    ],
  }

  interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    demoLink: string
    codeLink: string
  }

  const projects: Project[] = []

  const education = [
    {
      institution: "Valencia College - Associates Degree focused on Informational Technology",
      period: "2023 - Present",
      description: "Focus on software development, databases, and networking.",
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <a href="#home" className="nav-logo">
              <Terminal className="nav-icon" />
              <span className="nav-title">Juan Chareun</span>
            </a>
            <div className="nav-links">
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#education" className="nav-link">
                Education
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <h1 className="hero-title">Juan Chareun</h1>
          <h2 className="hero-subtitle">IT Student</h2>

          <p className="hero-description">
            Aspiring tech professional focused on ethical hacking, Linux, and network security. I share hands-on labs
            and document my learning to contribute to the cybersecurity community.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/juanchareun"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button github-button"
            >
              <Github className="button-icon" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/juan-chareun"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button linkedin-button"
            >
              <Linkedin className="button-icon" />
              LinkedIn
            </a>
            <a href="mailto:juanignaciochareun@gmail.com" className="hero-button email-button">
              <Mail className="button-icon" />
              Email
            </a>
          </div>

          <div className="scroll-indicator">
            <ChevronDown className="scroll-arrow" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">Skills & Expertise</h2>
            <p className="skills-description">Technologies and tools I use to build secure systems.</p>
          </div>

          <div className="skills-content">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">
                  <Terminal className="category-icon" />
                  {category}
                </h3>

                <div className="skills-grid">
                  {skillList.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      style={{
                        animationDelay: `${categoryIndex * 200 + index * 150}ms`,
                      }}
                    >
                      <div className="skill-icon-container">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="skill-icon-img"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Projects</h2>
            <p className="projects-description">Projects developed to showcase my technical skills.</p>
          </div>

          <div className="projects-grid">
            {projects.length === 0 ? (
              <div className="empty-state">
                <p>Projects coming soon...</p>
              </div>
            ) : (
              projects.map((project: Project, index: number) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    <div className="project-mockup">
                      <div className="mockup-header">
                        <div className="mockup-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="mockup-content">
                        <h3></h3>
                        <h3>
                          <span className="highlight"></span>
                        </h3>
                        <div className="mockup-button"></div>
                      </div>
                    </div>
                  </div>

                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.demoLink} className="project-link demo-link">
                        <ExternalLink className="link-icon" />
                        Demo
                      </a>
                      <a href={project.codeLink} className="project-link code-link">
                        <Code2 className="link-icon" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="education-container">
          <div className="education-header">
            <h2 className="education-title">Education</h2>
          </div>

          <div className="education-content">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-info">
                  <h3 className="education-institution">{edu.institution}</h3>
                  <div className="education-period">
                    <Calendar className="period-icon" />
                    {edu.period}
                  </div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2025 Juan Chareun -Portfolio</p>
        </div>
      </footer>
    </div>
  )
}

export default App
