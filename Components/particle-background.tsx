"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Enhanced Particle class with more dynamic properties
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      glowing: boolean
      glowIntensity: number
      glowDirection: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 3 + 1
        this.size = this.baseSize
        this.speedX = Math.random() * 1.5 - 0.75
        this.speedY = Math.random() * 1.5 - 0.75

        // More vibrant colors
        const hue = Math.floor(Math.random() * 60) + 20 // Golden/amber range
        const saturation = Math.floor(Math.random() * 30) + 70 // High saturation
        const lightness = Math.floor(Math.random() * 20) + 50 // Medium to high lightness
        const alpha = Math.random() * 0.3 + 0.2

        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`

        // Glow effect properties
        this.glowing = Math.random() > 0.7
        this.glowIntensity = 0
        this.glowDirection = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges with slight randomization
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX * (0.9 + Math.random() * 0.2)
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY * (0.9 + Math.random() * 0.2)
        }

        // Pulsating size effect
        if (this.glowing) {
          this.glowIntensity += 0.03 * this.glowDirection
          if (this.glowIntensity > 1) {
            this.glowDirection = -1
          } else if (this.glowIntensity < 0) {
            this.glowDirection = 1
          }

          this.size = this.baseSize * (1 + this.glowIntensity * 0.5)
        }
      }

      draw() {
        if (!ctx) return

        // Draw glow effect for some particles
        if (this.glowing) {
          // Parse the current color to extract components
          const colorMatch = this.color.match(/hsla$$(\d+),\s*(\d+)%,\s*(\d+)%,\s*([\d.]+)$$/)
          if (colorMatch) {
            const [, hue, saturation, lightness] = colorMatch

            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
            gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`)
            gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`)

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        // Draw the particle
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(120, Math.floor(window.innerWidth / 15))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return
      const maxDistance = 180

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Create gradient lines
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)

            gradient.addColorStop(0, `rgba(255, 179, 71, ${opacity * 0.3})`)
            gradient.addColorStop(1, `rgba(255, 126, 95, ${opacity * 0.3})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 150

    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    // Animation loop
    function animateParticles() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        // Add mouse interaction
        const dx = particle.x - mouseX
        const dy = particle.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          particle.speedX += dx * force * 0.02
          particle.speedY += dy * force * 0.02

          // Limit max speed
          const maxSpeed = 3
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
          }
        }

        // Apply some drag to slow particles gradually
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animateParticles)
    }

    animateParticles()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", () => {})
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="particles-canvas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    />
  )
}
