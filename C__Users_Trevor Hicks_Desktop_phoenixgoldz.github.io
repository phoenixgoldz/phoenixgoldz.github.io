"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Gamepad2, Play, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Images/Logo2026.png"
      >
        <source src="/Images/IntroLogo.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-slate-950/55 to-slate-950/90" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.img
          src="/Images/Logo2026.png"
          alt="PhoenixGold Game Studios"
          className="mx-auto mb-8 w-44 md:w-64 rounded-xl drop-shadow-[0_0_35px_rgba(255,179,71,0.45)]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-300 text-sm font-semibold border border-amber-400/20">
            Founder of PhoenixGold Game Studios
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-500"
        >
          PhoenixGold Game Studios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Creating worlds. Building adventures. Crafting family-friendly games.
          <br />
          Currently developing <span className="text-amber-300 font-semibold">Eucalyptus Edge</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 text-slate-950 font-bold transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
          >
            <Star className="mr-2 h-5 w-5" />
            Support Eucalyptus Edge
          </Link>

          <Link
            href="#game-projects"
            className="px-8 py-4 rounded-full bg-white/10 border border-amber-400/20 text-white font-semibold transition-transform hover:scale-105 hover:bg-white/15 flex items-center justify-center"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            View Projects
          </Link>

          <Link
            href="/Images/IntroLogo.mp4"
            target="_blank"
            className="px-8 py-4 rounded-full bg-white/10 border border-amber-400/20 text-white font-semibold transition-transform hover:scale-105 hover:bg-white/15 flex items-center justify-center"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Studio Intro
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link href="#about" className="text-slate-400 hover:text-amber-300 transition-colors">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}
