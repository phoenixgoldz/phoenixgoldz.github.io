"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Star } from "lucide-react"

export interface ProjectCardProps {
  title: string
  description: string
  imageSrc?: string
  videoSrc?: string
  posterSrc?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  trailerUrl?: string
  kickstarterUrl?: string
  featured?: boolean
  index?: number
}

export function ProjectCard({
  title,
  description,
  imageSrc = "/placeholder.svg",
  videoSrc,
  posterSrc,
  tags,
  githubUrl,
  liveUrl,
  trailerUrl,
  kickstarterUrl,
  featured = false,
  index = 0,
}: Readonly<ProjectCardProps>) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`project-card ${featured ? "featured-game-card" : ""}`}
    >
      <div className="project-image">
        {videoSrc ? (
          <video
            className="project-video"
            controls
            preload="metadata"
            poster={posterSrc || imageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        )}

        <div className="project-overlay">
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-content">
        {featured && <p className="hero-badge">Flagship Project</p>}

        <h3 className="project-title font-display">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-links">
          {trailerUrl && (
            <Link
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Watch ${title} trailer`}
            >
              <Play className="h-5 w-5" />
            </Link>
          )}

          {kickstarterUrl && (
            <Link
              href={kickstarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Support ${title} on Kickstarter`}
            >
              <Star className="h-5 w-5" />
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
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
              className="project-link"
              aria-label={`Open ${title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
