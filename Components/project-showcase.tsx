"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "frostpaw-dash",
    title: "Frostpaw Dash",
    description:
      "A fantasy endless runner for Android where you guide a chibi white leopard through magical biomes. Built with Unity 6, C#, TextMeshPro, Post Processing, Async Loading.",
    imageSrc:
      "/Images/FPdash Banner.jpg",
    tags: ["Unity", "C#", "Android", "Game Dev"],
    githubUrl: "https://github.com/phoenixgoldz/FrostpawDash",
    liveUrl: "https://pheonixgold.itch.io/",
    category: "Game Dev",
  },
  {
    id: "candy-rush",
    title: "Candy Rush Grand Prix",
    description:
      "A candy-themed kart racer inspired by Diddy Kong Racing, built in Unreal Engine 5. Features local multiplayer, boss races, and more.",
    imageSrc:
      "/Images/CRGP banner.jpg",
    tags: ["Unreal Engine 5", "C++", "Multiplayer", "Game Dev"],
    githubUrl: "https://github.com/phoenixgoldz/Capstone",
    liveUrl: "https://www.linkedin.com/in/trevor-hicks2025/details/projects/",
    category: "Game Dev",
  },
  {
    id: "megablast-mayhem",
    title: "MegaBlast Mayhem",
    description:
      "A fast-paced Bomberman-style Java game with gamepad support, dynamic map parsing, and custom explosions. Built from scratch in Java.",
    imageSrc: "/Images/Mbm.jpg",
    tags: ["Java", "Game Dev", "Custom Engine", "Retro"],
    githubUrl: "https://github.com/phoenixgoldz/MegaBlast-Mayhem",
    category: "Game Dev",
  },
  {
    id: "the-forgotten-trial",
    title: "The Forgotten Trial",
    description:
      "A tactical RPG mystery built in Unreal Engine 5.5.4 featuring turn-based combat, AI-generated dialogue, and an immersive dungeon narrative. Designed with exploration, memory fragments, and rich UI systems.",
    imageSrc: "/Images/TheForgottenTrial.png", // <-- Add your actual image path here
    tags: ["Unreal Engine", "C++", "Blueprints", "Tactical RPG", "AI Integration"],
    githubUrl: "https://github.com/phoenixgoldz/The-Forgotten-Trial",
    liveUrl: "https://pheonixgold.itch.io/", // Optional: update with demo link or Devlog
    category: "Game Dev",
  },
]

const categories = ["All", "Game Dev", "Web Dev", "Software"]

export function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title centered font-display">Featured Projects</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <Link
            href="https://github.com/phoenixgoldz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="project-card"
    >
      <div className="project-image">
        <Image src={project.imageSrc || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="project-overlay">
          <div className="project-tags">
            {project.tags.map((tag: string) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title font-display">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}

          <Link href={`/projects/${project.id}`} className="project-details">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
