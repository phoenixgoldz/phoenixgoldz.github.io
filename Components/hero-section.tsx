"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Code, Gamepad2 } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    function createParticle(canvasWidth, canvasHeight) {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: `rgba(255, 179, 71, ${Math.random() * 0.5 + 0.2})`,
        update(canvasWidth, canvasHeight) {
          this.x += this.speedX
          this.y += this.speedY
          if (this.x > canvasWidth) this.x = 0
          else if (this.x < 0) this.x = canvasWidth
          if (this.y > canvasHeight) this.y = 0
          else if (this.y < 0) this.y = canvasHeight
        },
        draw(ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height)
        particles[i].draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-400 text-sm font-medium mb-4">
            Game Developer & Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600"
        >
          Trevor Hicks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto"
        >
          Crafting immersive digital experiences where{" "}
          <span className="text-amber-400 font-semibold">code meets creativity</span>. Specializing in game development,
          software engineering, and AI exploration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            View My Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-zinc-800 border border-zinc-700 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:bg-zinc-700 flex items-center justify-center"
          >
            <Code className="mr-2 h-5 w-5" />
            Let's Collaborate
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Link href="#about" className="text-zinc-400 hover:text-amber-400 transition-colors">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}
