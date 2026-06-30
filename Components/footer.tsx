"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link href="/" className="logo footer-logo">
              <Image
                src="/Images/Logo2026.png"
                alt="PhoenixGold Game Studios logo"
                width={40}
                height={40}
                className="nav-logo"
              />
              <span className="logo-text font-display">PhoenixGold</span>
            </Link>

            <p className="footer-description">
              PhoenixGold Game Studios is an independent game studio creating memorable family-friendly experiences with
              competitive gameplay, vibrant worlds, and lovable characters. Current flagship project: Eucalyptus Edge.
            </p>

            <div className="footer-social">
              <a
                href="https://github.com/phoenixgoldz"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.866 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.832.091-.646.35-1.087.636-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.03-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.834a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.684 0 3.842-2.337 4.687-4.566 4.935.359.309.679.919.679 1.852 0 1.337-.012 2.417-.012 2.746 0 .267.18.579.688.481C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/trevor-hicks2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9H2v12h4V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://pheonixgold.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Itch.io"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18l-1 5a3 3 0 0 1-3 2.5 3 3 0 0 1-3-2.5 3 3 0 0 1-6 0 3 3 0 0 1-3 2.5A3 3 0 0 1 2 12l1-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 14v6h14v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-title font-display">Explore</h3>
            <nav className="footer-nav">
              <Link href="#game-projects">Eucalyptus Edge</Link>
              <Link href="#software-projects">Software Projects</Link>
              <Link href="#skills">Tech Stack</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title font-display">Studio</h3>
            <p className="footer-contact-item">PhoenixGold Game Studios</p>
            <p className="footer-contact-item">Salt Lake City, Utah</p>
            <p className="footer-contact-item">
              <a href="mailto:th1ckssoftwar3@gmail.com">th1ckssoftwar3@gmail.com</a>
            </p>
            <p className="footer-contact-item">
              <a
                href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Eucalyptus Edge on Kickstarter
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {year} PhoenixGold Game Studios. All rights reserved.</p>
          <p className="credits">Built by Trevor Hicks with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
