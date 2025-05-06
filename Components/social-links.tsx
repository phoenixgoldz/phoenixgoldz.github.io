import React from "react";
import Link from "next/link"
import { Github, Linkedin, ExternalLink } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://github.com/phoenixgoldz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-white transition-colors"
        aria-label="GitHub Profile"
      >
        <Github className="h-5 w-5" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/trevor-hicks2025/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-white transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-5 w-5" />
      </Link>

      <Link
        href="https://pheonixgold.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-white transition-colors"
        aria-label="Itch.io Profile"
      >
        <ExternalLink className="h-5 w-5" />
      </Link>

      <Link
        href="/resume.pdf"
        target="_blank"
        className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-amber-500 hover:text-white transition-colors text-sm font-medium"
      >
        Resume
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  )
}
