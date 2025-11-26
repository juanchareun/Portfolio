"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Terminal from "@/components/terminal"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-bold text-lg">Juan Chareun</span>
            </button>
            <div className="flex gap-4">
              {["skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-mono text-sm capitalize transition-all duration-300 relative ${
                    activeSection === section
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-in fade-in slide-in-from-bottom-2 duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Name and Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-balance">Juan Chareun</h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground font-bold"></p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Cybersecurity student dedicated to understanding and protecting systems. Passionate about ethical hacking, network security, and continuous learning in the ever-evolving field of cybersecurity.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/juanchareun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-14 w-14 rounded-lg border-2 border-border bg-card transition-all hover:border-primary hover:bg-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/juan-chareun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-14 w-14 rounded-lg border-2 border-border bg-card transition-all hover:border-primary hover:bg-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:juanignaciochareun@gmail.com"
                  className="flex items-center justify-center h-14 w-14 rounded-lg border-2 border-border bg-card transition-all hover:border-primary hover:bg-primary/10"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Side - Terminal */}
            <div>
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 Cybersecurity Portfolio. Juan Chareun.
          </p>
        </div>
      </footer>
    </div>
  )
}
