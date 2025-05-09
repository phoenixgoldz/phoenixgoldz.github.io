"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Gamepad2, Code, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true)

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width - 0.5
        const y = (e.clientY - top) / height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Hide scroll indicator when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicatorVisible(false)
      } else {
        setScrollIndicatorVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(255, 179, 71, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={badgeVariants} whileHover={{ scale: 1.05 }}>
            <span className="hero-badge">Game Developer & Software Engineer</span>
          </motion.div>

          <motion.h1
            className="hero-title font-display"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              textShadow: `${mousePosition.x * -10}px ${mousePosition.y * -10}px 20px rgba(255, 179, 71, 0.3)`,
            }}
          >
            Trevor Hicks
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            }}
          >
            Crafting immersive digital experiences where{" "}
            <motion.span
              className="highlight"
              animate={{
                color: ["#ffb347", "#ff7e5f", "#ffb347"],
                textShadow: [
                  "0 0 5px rgba(255, 179, 71, 0.3)",
                  "0 0 15px rgba(255, 126, 95, 0.5)",
                  "0 0 5px rgba(255, 179, 71, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              code meets creativity
            </motion.span>
            . Specializing in game development, software engineering, web development, and AI exploration.
          </motion.p>

          <div className="hero-buttons">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#projects" className="btn btn-primary">
                <Gamepad2 className="h-5 w-5 mr-2" />
                View My Projects
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="#contact" className="btn btn-secondary">
                <Code className="h-5 w-5 mr-2" />
                Let's Collaborate
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: scrollIndicatorVisible ? 1 : 0,
          y: scrollIndicatorVisible ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
      >
        <Link href="#about">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-8 w-8 text-amber-400" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
