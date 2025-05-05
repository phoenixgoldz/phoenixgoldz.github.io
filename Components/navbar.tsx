"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-zinc-900/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
              TH
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <Link
              href="/blog"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium transition-transform hover:scale-105"
            >
              Blog
            </Link>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900/90 backdrop-blur-md z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                <MobileNavLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink href="/#projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </MobileNavLink>
                <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </MobileNavLink>
                <Link
                  href="/blog"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-zinc-300 hover:text-amber-400 transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-2xl font-bold text-white hover:text-amber-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
