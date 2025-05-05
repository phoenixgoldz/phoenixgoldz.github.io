import Image from "next/image"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { SocialLinks } from "@/components/social-links"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gradient">About Me</h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                I'm a Graduate from Neumont College of Computer Science (Class of 2025), passionate about creating fun,
                polished, and technically sound games and software. My expertise spans game development, software
                engineering, and AI exploration.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                With a strong foundation in both technical implementation and creative design, I bridge the gap between
                software engineering precision and game development creativity.
              </p>
              <SocialLinks />
            </div>
            <div className="relative group perspective">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden transform transition-all duration-700 card-3d">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Trevor Hicks"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Trevor Hicks</h3>
                  <p className="text-amber-400">Game Developer | Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Frostpaw Dash"
              description="A fantasy endless runner for Android where you guide a chibi white leopard through magical biomes. Built with Unity 6, C#, TextMeshPro, Post Processing."
              imageSrc="/placeholder.svg?height=300&width=500"
              tags={["Unity", "C#", "Android", "Game Dev"]}
              githubUrl="https://github.com/phoenixgoldz/FrostpawDash"
              liveUrl="https://pheonixgold.itch.io/"
            />
            <ProjectCard
              title="Candy Rush Grand Prix"
              description="A candy-themed kart racer inspired by Diddy Kong Racing, built in Unreal Engine 5. Features local multiplayer, boss races, and more."
              imageSrc="/placeholder.svg?height=300&width=500"
              tags={["Unreal Engine 5", "C++", "Multiplayer", "Game Dev"]}
              githubUrl="#"
              liveUrl="https://www.linkedin.com/in/trevor-hicks2025/details/projects/"
            />
            <ProjectCard
              title="AI Code Assistant"
              description="A VS Code extension that uses machine learning to suggest code completions and refactorings based on your coding patterns."
              imageSrc="/placeholder.svg?height=300&width=500"
              tags={["TypeScript", "Machine Learning", "VS Code API", "Software Dev"]}
              githubUrl="https://github.com/phoenixgoldz"
              liveUrl="#"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
