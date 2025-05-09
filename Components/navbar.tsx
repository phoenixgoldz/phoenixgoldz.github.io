"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="logo">
            <Image src="/Images/PGlogo.jpg" alt="Logo" width={40} height={40} className="nav-logo" />
            <span className="logo-text font-display">TH</span>
          </Link>
          <div className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <Link href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#projects" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#skills" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}
