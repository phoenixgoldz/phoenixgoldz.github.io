"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Particle = {
  x: number
  y: number
  size: number
  baseSize: number
  speedX: number
  speedY: number
  color: string
  glowColor: string
  glowing: boolean
  glowIntensity: number
  glowDirection: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const palette = [
      { color: "rgba(255, 179, 71, 0.55)", glow: "rgba(255, 179, 71, 0.35)" },
      { color: "rgba(255, 126, 95, 0.45)", glow: "rgba(255, 126, 95, 0.25)" },
      { color: "rgba(52, 211, 153, 0.45)", glow: "rgba(52, 211, 153, 0.25)" },
      { color: "rgba(34, 211, 238, 0.35)", glow: "rgba(34, 211, 238, 0.2)" },
      { color: "rgba(168, 85, 247, 0.28)", glow: "rgba(168, 85, 247, 0.18)" },
    ]

    const particles: Particle[] = []
    let mouseX = -9999
    let mouseY = -9999

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => {
      const selected = palette[Math.floor(Math.random() * palette.length)]
      const baseSize = Math.random() * 2.6 + 0.8

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: baseSize,
        baseSize,
        speedX: Math.random() * 0.9 - 0.45,
        speedY: Math.random() * 0.9 - 0.45,
        color: selected.color,
        glowColor: selected.glow,
        glowing: Math.random() > 0.58,
        glowIntensity: Math.random(),
        glowDirection: Math.random() > 0.5 ? 1 : -1,
      }
    }

    const rebuildParticles = () => {
      particles.length = 0
      const count = Math.min(110, Math.max(45, Math.floor(window.innerWidth / 18)))
      for (let i = 0; i < count; i++) particles.push(createParticle())
    }

    const drawParticle = (particle: Particle) => {
      if (particle.glowing) {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5,
        )
        gradient.addColorStop(0, particle.glowColor)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    }

    const connectParticles = () => {
      const maxDistance = 145

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.18
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            gradient.addColorStop(0, `rgba(255, 179, 71, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(52, 211, 153, ${opacity * 0.85})`)
            gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity * 0.7})`)

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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        const dx = particle.x - mouseX
        const dy = particle.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 130) {
          const force = (130 - distance) / 130
          particle.speedX += dx * force * 0.006
          particle.speedY += dy * force * 0.006
        }

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.speedX *= 0.995
        particle.speedY *= 0.995

        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.y > canvas.height + 20) particle.y = -20
        if (particle.y < -20) particle.y = canvas.height + 20

        if (particle.glowing) {
          particle.glowIntensity += 0.02 * particle.glowDirection
          if (particle.glowIntensity > 1 || particle.glowIntensity < 0) particle.glowDirection *= -1
          particle.size = particle.baseSize * (1 + Math.max(0, particle.glowIntensity) * 0.45)
        }

        drawParticle(particle)
      }

      connectParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setCanvasDimensions()
      rebuildParticles()
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    setCanvasDimensions()
    rebuildParticles()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="particles-canvas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.42 }}
      transition={{ duration: 1.8 }}
      aria-hidden="true"
    />
  )
}
