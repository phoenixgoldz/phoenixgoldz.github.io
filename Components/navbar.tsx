"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobileMenuOpen)
    return () => document.body.classList.remove("no-scroll")
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image
              src="/Images/Logo2026.png"
              alt="PhoenixGold Game Studios logo"
              width={44}
              height={44}
              className="nav-logo"
              priority
            />
            <span className="logo-text font-display">PhoenixGold</span>
          </Link>

          <div className="nav-links">
            <Link href="#game-projects">Eucalyptus Edge</Link>
            <Link href="#about">About</Link>
            <Link href="#skills">Tech Stack</Link>
            <Link href="#software-projects">Software</Link>
            <Link href="#contact">Contact</Link>
            <Link
              href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small btn-primary"
            >
              <Star className="h-4 w-4" />
              Kickstarter
            </Link>
          </div>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <Link href="#game-projects" className="mobile-link" onClick={closeMenu}>
            Eucalyptus Edge
          </Link>
          <Link href="#about" className="mobile-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="#skills" className="mobile-link" onClick={closeMenu}>
            Tech Stack
          </Link>
          <Link href="#software-projects" className="mobile-link" onClick={closeMenu}>
            Software
          </Link>
          <Link href="#contact" className="mobile-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link
            href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            onClick={closeMenu}
          >
            Kickstarter
          </Link>
        </div>
      </div>
    </>
  )
}
