import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStack } from "@/components/tech-stack"
import { ProjectShowcase } from "@/components/project-showcase"
import { CodeShowcase } from "@/components/code-showcase"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      {/* Particle Canvas Background */}
      <canvas id="particles-canvas" className="particles-canvas"></canvas>

      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectShowcase />
      <CodeShowcase />
      <ContactSection />
    </main>
  )
}
