"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Gamepad2, Code, Brush, Layers } from "lucide-react"

export function GameDevShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Game character sprite animation
    const spriteWidth = 50
    const spriteHeight = 50
    let frameX = 0
    const frameY = 0
    let gameFrame = 0
    const staggerFrames = 5

    // Character position
    let x = canvas.width / 2 - spriteWidth / 2
    let y = canvas.height / 2 - spriteHeight / 2
    let directionX = 2
    let directionY = 1

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background grid
      ctx.strokeStyle = "rgba(255, 179, 71, 0.1)"
      ctx.lineWidth = 1
      const gridSize = 30
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Draw character
      ctx.fillStyle = "#FFB347"
      ctx.fillRect(x, y, spriteWidth, spriteHeight)

      // Draw character details
      ctx.fillStyle = "#FF7E5F"
      ctx.fillRect(x + 10, y + 10, 10, 10)
      ctx.fillRect(x + 30, y + 10, 10, 10)
      ctx.fillStyle = "#333"
      ctx.fillRect(x + 15, y + 35, 20, 5)

      // Update position
      x += directionX
      y += directionY

      // Bounce off walls
      if (x <= 0 || x >= canvas.width - spriteWidth) {
        directionX *= -1
      }
      if (y <= 0 || y >= canvas.height - spriteHeight) {
        directionY *= -1
      }

      // Animation frames
      if (gameFrame % staggerFrames === 0) {
        if (frameX < 3) frameX++
        else frameX = 0
      }
      gameFrame++

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      x = canvas.width / 2 - spriteWidth / 2
      y = canvas.height / 2 - spriteHeight / 2
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const skills = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Development",
      description:
        "Proficient in Unity and Unreal Engine with experience in creating engaging gameplay mechanics, character controllers, and game systems.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming",
      description:
        "Strong foundation in C#, C++, and JavaScript for game logic, AI behaviors, physics interactions, and performance optimization.",
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Game Design",
      description:
        "Experience in level design, game balancing, player progression systems, and creating engaging user experiences.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "3D Modeling & Animation",
      description:
        "Skills in Blender for creating game-ready 3D assets, character rigging, and animation for interactive experiences.",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title centered font-display">Game Development Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[300px] rounded-xl overflow-hidden border-2 border-amber-500/30">
              <canvas ref={canvasRef} className="w-full h-full bg-zinc-900"></canvas>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                <p className="text-amber-400 font-mono text-sm">// Interactive game character demo</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{skill.title}</h3>
                  <p className="text-zinc-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4 font-display">Game Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-700">
              <div className="text-amber-400 font-bold text-lg mb-2">01. Concept</div>
              <p className="text-zinc-400 text-sm">
                Game design documents, mechanics planning, and core gameplay loops
              </p>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-700">
              <div className="text-amber-400 font-bold text-lg mb-2">02. Prototype</div>
              <p className="text-zinc-400 text-sm">
                Rapid iteration, core mechanics implementation, and playability testing
              </p>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-700">
              <div className="text-amber-400 font-bold text-lg mb-2">03. Production</div>
              <p className="text-zinc-400 text-sm">
                Asset creation, level design, UI implementation, and systems integration
              </p>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-700">
              <div className="text-amber-400 font-bold text-lg mb-2">04. Polish</div>
              <p className="text-zinc-400 text-sm">
                Performance optimization, bug fixing, playtesting, and final adjustments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
