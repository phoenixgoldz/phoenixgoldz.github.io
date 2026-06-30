"use client"

import Link from "next/link"
import { ProjectCard, type ProjectCardProps } from "./project-card"

const kickstarterUrl = "https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"

const gameProjects: ProjectCardProps[] = [
  {
    title: "Eucalyptus Edge",
    description:
      "Cute Fighters. Serious Skills. A family-friendly 3D weapon-based fighting game built in Unreal Engine 5.8. Battle through Verdantia as original Australian animal warriors using unique weapons, Edge Energy, ring-out mechanics, and skill-based combat. The current trailer is an AI-assisted concept placeholder while production continues.",
    imageSrc: "/Images/EE_Banner1920x1080.png",
    posterSrc: "/Images/EE_Banner1920x1080.png",
    videoSrc: "/Video/Untitled design.mp4",
    trailerUrl: "/Video/Untitled design.mp4",
    kickstarterUrl,
    githubUrl: "https://github.com/phoenixgoldz/Eucalyptus-Edge",
    tags: ["Unreal Engine 5.8", "Fighting Game", "Concept Trailer", "Kickstarter", "PC"],
    featured: true,
  },
  {
    title: "Candy Rush Grand Prix",
    description:
      "A candy-themed kart racer inspired by Diddy Kong Racing, built in Unreal Engine 5. Features local multiplayer, boss races, power-ups, and colorful arcade racing systems.",
    imageSrc: "/Images/CRGP banner.jpg",
    tags: ["Unreal Engine", "C++", "Multiplayer", "Game Dev"],
    githubUrl: "https://github.com/phoenixgoldz/Capstone",
  },
  {
    title: "Frostpaw Dash",
    description:
      "A fantasy endless runner for Android where you guide a chibi white leopard through magical biomes. Built with Unity 6, C#, TextMeshPro, and post-processing.",
    imageSrc: "/Images/FPdash Banner.png",
    tags: ["Unity", "C#", "Android", "Game Dev"],
    githubUrl: "https://github.com/phoenixgoldz/FrostpawDash",
    liveUrl: "https://pheonixgold.itch.io/",
  },
]

const softwareProjects: ProjectCardProps[] = [
  {
    title: "GitHub Activity Dashboard",
    description:
      "A dashboard that visualizes GitHub activity across repositories using Flask, GitHub API integrations, and chart-driven UI.",
    imageSrc: "/Images/EE_Banner1920x1080.png",
    tags: ["Flask", "Python", "Chart.js", "API"],
    githubUrl: "https://github.com/phoenixgoldz/github-dashboard",
  },
  {
    title: "Superhero API Search Service",
    description:
      "A REST API built with Spring Boot for superhero search using JPA query methods, custom filters, and clean backend structure.",
    imageSrc: "/Images/EE_Banner1920x1080.png",
    tags: ["Java", "Spring Boot", "JPA", "REST API"],
    githubUrl: "https://github.com/phoenixgoldz/superheroapi",
  },
  {
    title: "Design Patterns Showcase",
    description:
      "A showcase of classic software design patterns implemented in TypeScript with clean modular code and object-oriented structure.",
    imageSrc: "/Images/EE_Banner1920x1080.png",
    tags: ["TypeScript", "OOP", "SOLID", "Architecture"],
    githubUrl: "https://github.com/phoenixgoldz/design-patterns",
  },
]

export function ProjectShowcase() {
  return (
    <>
      <section id="game-projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title centered font-display">Featured Game Projects</h2>

          <div className="projects-grid">
            {gameProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="software-projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title centered font-display">Featured Software Projects</h2>

          <div className="projects-grid">
            {softwareProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <div className="projects-cta">
            <Link
              href="https://github.com/phoenixgoldz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View All Ongoing Projects
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
    </>
  )
}
