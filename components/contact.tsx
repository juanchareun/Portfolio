"use client"

import type React from "react"

import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    alert("Message sent! (This is a demo)")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "mail",
      value: "juanignaciochareun@gmail.com",
      href: "mailto:juanignaciochareun@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/juanchareun",
      href: "https://github.com/juanchareun",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/juan-chareun",
      href: "https://linkedin.com/in/juan-chareun",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Orlando, Florida",
      href: null,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="mb-2 font-mono text-sm text-primary"># Get In Touch</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mb-6 text-muted-foreground leading-relaxed">
              I'm always interested in discussing cybersecurity topics, collaboration opportunities, or connecting. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-mono text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-border bg-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-sm text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-sm text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-6 py-3 font-mono font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
