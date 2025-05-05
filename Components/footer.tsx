import Link from "next/link"
import { Github, Linkedin, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
                Trevor Hicks
              </span>
            </Link>
            <p className="text-zinc-400 mb-4 max-w-md">
              Game developer and software engineer passionate about creating immersive digital experiences where code
              meets creativity.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/phoenixgoldz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/trevor-hicks2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://pheonixgold.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="Itch.io"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-zinc-400 mb-2">
              <a href="mailto:th1ckssoftwar3@gmail.com" className="hover:text-amber-400 transition-colors">
                th1ckssoftwar3@gmail.com
              </a>
            </p>
            <p className="text-zinc-400">Salt Lake City, Utah</p>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
          <p>&copy; {currentYear} Trevor Hicks. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <span className="text-amber-400">Next.js</span> and{" "}
            <span className="text-amber-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
