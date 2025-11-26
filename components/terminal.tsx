"use client"

import { useState, useEffect } from "react"

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState<string[]>([])

  const lines = [
    { text: "juanchareun@cyberlab:~$ ", color: "prompt", delay: 100 },
    { text: "whoami", color: "command", delay: 600 },
    { text: "", color: "normal", delay: 100 },
    { text: "  Cybersecurity student", color: "muted", delay: 100 },
    { text: "", color: "normal", delay: 300 },
    { text: "juanchareun@cyberlab:~$ ", color: "prompt", delay: 100 },
    { text: "ls skills/", color: "command", delay: 600 },
    { text: "", color: "normal", delay: 100 },
    { text: "  Python  Bash  Linux  Git", color: "muted", delay: 100 },
    { text: "", color: "normal", delay: 300 },
    { text: "juanchareun@cyberlab:~$ ", color: "prompt", delay: 100 },
    { text: "cat focus.txt", color: "command", delay: 600 },
    { text: "", color: "normal", delay: 100 },
    { text: "  Cloud Security • Network Security • Ethical Hacking", color: "muted", delay: 100 },
    { text: "", color: "normal", delay: 300 },
    { text: "juanchareun@cyberlab:~$ ", color: "prompt", delay: 0 },
    { text: "_cursor", color: "cursor", delay: 0 },
  ]

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, lines[currentLine]])
        setCurrentLine(currentLine + 1)
      }, lines[currentLine].delay || 150)
      return () => clearTimeout(timeout)
    }
  }, [currentLine])

  return (
    <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 font-mono text-xs text-muted-foreground">juanchareun@cyberlab:~</span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed min-h-[320px]">
        {displayedText.map((line, index) => {
          if (line.color === "prompt") {
            return (
              <span key={index} className="text-primary font-bold">
                {line.text}
              </span>
            )
          }
          if (line.color === "command") {
            return (
              <span key={index} className="text-foreground">
                {line.text}
              </span>
            )
          }
          if (line.color === "cursor") {
            return <span key={index} className="inline-block h-4 w-2 animate-pulse bg-primary ml-1" />
          }
          if (line.text === "") {
            return <div key={index} className="h-4" />
          }
          return (
            <div key={index} className="text-muted-foreground">
              {line.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}
