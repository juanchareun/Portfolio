import { Folder, Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Vulnerability Assessment Report",
      description:
        "Conducted a full vulnerability assessment on a test environment (Metasploitable). Identified 5 critical vulnerabilities and wrote a professional remediation report.",
      tags: ["Nmap", "Nessus", "Reporting"],
      github: "https://github.com/yourusername/vuln-assessment",
      demo: null,
    },
    {
      title: "Network Traffic Analyzer",
      description:
        "Built a Python tool to analyze network traffic patterns and detect potential security threats using Scapy. Includes real-time monitoring and logging capabilities.",
      tags: ["Python", "Scapy", "Network Security"],
      github: "https://github.com/juanchareun/network-traffic-analyzer",
      demo: null,
    },
    {
      title: "Password Strength Analyzer",
      description:
        "Python application that evaluates password strength using multiple criteria and common password databases. Provides recommendations for stronger passwords.",
      tags: ["Python", "Cryptography", "Security"],
      github: "https://github.com/juanchareun/password-analyzer",
      demo: null,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="mb-2 font-mono text-sm text-primary"># Security Labs & Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary"
          >
            <div className="mb-4 flex items-start justify-between">
              <Folder className="h-8 w-8 text-primary" />
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <h4 className="mb-2 font-mono text-lg font-bold">{project.title}</h4>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="font-mono text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
