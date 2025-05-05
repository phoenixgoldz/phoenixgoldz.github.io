"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, imageSrc, tags, githubUrl, liveUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
      </div>

      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-amber-500/20 text-amber-400">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">{title}</h3>

        <p className="text-zinc-400 mb-6 line-clamp-3">{description}</p>

        <div className="flex items-center gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-400 transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </Link>
          )}

          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-400 transition-colors"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}

          <Link
            href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="ml-auto text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center"
          >
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

      <div
        className={`absolute inset-0 border-2 border-amber-500 rounded-xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </motion.div>
  )
}
