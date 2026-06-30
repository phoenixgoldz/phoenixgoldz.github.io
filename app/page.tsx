export default function Home() {
  return (
    <main>
      <canvas id="particles-canvas" className="particles-canvas" />

      <section className="hero studio-hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/Images/Logo2026.png">
          <source src="/Images/IntroLogo.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="container">
          <div className="hero-content">
            <img src="/Images/Logo2026.png" alt="PhoenixGold Game Studios" className="hero-logo" />
            <div className="hero-badge">Founder of PhoenixGold Game Studios</div>
            <h1 className="hero-title">PhoenixGold Game Studios</h1>
            <p className="hero-subtitle">
              Creating Worlds.<br />
              Building Adventures.<br />
              Crafting Family-Friendly Games.
            </p>
            <div className="hero-buttons">
              <a
                href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Support Eucalyptus Edge
              </a>
              <a href="#eucalyptus-edge" className="btn btn-secondary">
                Watch Concept Trailer
              </a>
              <a href="/Images/IntroLogo.mp4" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                ▶ Watch Studio Intro
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="phoenix-gold-games" className="section studio-section">
        <div className="container">
          <h2 className="section-title centered">PhoenixGold Game Studios</h2>
          <p className="section-text centered studio-intro">
            PhoenixGold Game Studios is an independent game studio focused on creating memorable family-friendly experiences with competitive gameplay, vibrant worlds, and lovable characters.
          </p>
        </div>
      </section>

      <section id="eucalyptus-edge" className="section featured-game-section">
        <div className="container">
          <div className="featured-game-grid">
            <div className="featured-game-media">
              <video className="featured-trailer" controls preload="metadata" poster="/Images/EE_Banner1920x1080.png">
                <source src="/Video/Untitled design.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="featured-game-content">
              <span className="eyebrow">Flagship Project</span>
              <h2 className="section-title">Eucalyptus Edge</h2>
              <p className="tagline">Cute Fighters. Serious Skills.</p>
              <p className="section-text">
                A family-friendly 3D weapon-based fighting game inspired by Soulcalibur. Battle as adorable Australian animal warriors in Verdantia, mastering unique weapons, strategic movement, dodging, blocking, Edge Energy, and ring-out mechanics.
              </p>
              <p className="section-text">
                The current trailer is an early concept trailer using AI-assisted placeholder visuals to communicate the world and story while development continues in Unreal Engine 5.8.
              </p>

              <div className="feature-pills">
                <span>Unreal Engine 5.8</span>
                <span>3D Arena Combat</span>
                <span>Concept Trailer</span>
                <span>Kickstarter</span>
              </div>

              <div className="hero-buttons featured-buttons">
                <a
                  href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Back on Kickstarter
                </a>
                <a href="/Video/Untitled design.mp4" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  ▶ Open Trailer
                </a>
                <a href="https://github.com/phoenixgoldz/Eucalyptus-Edge" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section roadmap-section">
        <div className="container">
          <h2 className="section-title centered">Eucalyptus Edge Development Roadmap</h2>
          <p className="section-text centered roadmap-intro">
            Current progress toward the first playable prototype for PhoenixGold Game Studios' debut title.
          </p>

          <div className="roadmap-status-grid">
            <div className="roadmap-card roadmap-done">
              <span className="roadmap-status">Completed</span>
              <h3>Foundation & Branding</h3>
              <p>Game concept, studio branding, Kickstarter page, portfolio page, GitHub repository, and public project identity have been established.</p>
            </div>
            <div className="roadmap-card roadmap-done">
              <span className="roadmap-status">Completed</span>
              <h3>World & Character Concepts</h3>
              <p>Verdantia, core arenas, fighter roster, PhoenixGold studio intro direction, and Eucalyptus Edge visual style have been designed.</p>
            </div>
            <div className="roadmap-card roadmap-progress">
              <span className="roadmap-status">In Progress</span>
              <h3>Unreal Engine 5.8 Setup</h3>
              <p>Project is running in Unreal Engine 5.8 with imported character assets, consistent scaling, GitHub LFS support, and early project structure.</p>
            </div>
            <div className="roadmap-card roadmap-progress">
              <span className="roadmap-status">In Progress</span>
              <h3>Main Menu Experience</h3>
              <p>Main menu direction is locked: cinematic animated background, streamlined AAA-style navigation, and a clear flow into character select and mode select.</p>
            </div>
            <div className="roadmap-card roadmap-next">
              <span className="roadmap-status">Next Step</span>
              <h3>Combat Prototype</h3>
              <p>Build the first playable local versus prototype with movement, attacks, blocking, dodging, hit detection, camera behavior, UI feedback, and arena loading.</p>
            </div>
            <div className="roadmap-card roadmap-next">
              <span className="roadmap-status">Upcoming</span>
              <h3>Training & AI Systems</h3>
              <p>Add training dummy logic, basic AI behavior, combat testing tools, and player feedback systems for health, Edge Energy, and match flow.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="game-projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title centered">Featured Games</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/Images/CRGP banner.jpg" alt="Candy Rush Grand Prix" loading="lazy" />
                <div className="project-overlay">
                  <div className="project-tags">
                    <span className="project-tag">Unreal Engine</span>
                    <span className="project-tag">C++</span>
                    <span className="project-tag">Multiplayer</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Candy Rush Grand Prix</h3>
                <p className="project-description">A candy-themed kart racer inspired by Diddy Kong Racing, built in Unreal Engine 5. Features local multiplayer, boss races, and more.</p>
                <div className="project-links">
                  <a href="https://github.com/phoenixgoldz/Capstone" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository"><span className="link-icon">↗</span></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/Images/FPdash Banner.png" alt="Frostpaw Dash" loading="lazy" />
                <div className="project-overlay">
                  <div className="project-tags">
                    <span className="project-tag">Unity</span>
                    <span className="project-tag">C#</span>
                    <span className="project-tag">Android</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Frostpaw Dash</h3>
                <p className="project-description">A fantasy endless runner for Android where you guide a chibi white leopard through magical biomes. Built with Unity 6, C#, TextMeshPro, and Post Processing.</p>
                <div className="project-links">
                  <a href="https://github.com/phoenixgoldz/FrostpawDash" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository"><span className="link-icon">↗</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="software-projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title centered">Featured Software Projects</h2>
          <div className="projects-grid">
            <div className="project-card software-card">
              <div className="project-content">
                <div className="project-tags static-tags"><span className="project-tag">Flask</span><span className="project-tag">Python</span><span className="project-tag">Chart.js</span></div>
                <h3 className="project-title">GitHub Activity Dashboard</h3>
                <p className="project-description">A real-time dashboard that visualizes GitHub activity across repositories using Flask, GitHub API, and Chart.js.</p>
                <div className="project-links"><a href="https://github.com/phoenixgoldz/github-dashboard" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repo"><span className="link-icon">↗</span></a></div>
              </div>
            </div>
            <div className="project-card software-card">
              <div className="project-content">
                <div className="project-tags static-tags"><span className="project-tag">Java</span><span className="project-tag">Spring Boot</span><span className="project-tag">REST API</span></div>
                <h3 className="project-title">Superhero API Search Service</h3>
                <p className="project-description">REST API built with Spring Boot for superhero search using JPA query methods and custom filters.</p>
                <div className="project-links"><a href="https://github.com/phoenixgoldz/superheroapi" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub"><span className="link-icon">↗</span></a></div>
              </div>
            </div>
            <div className="project-card software-card">
              <div className="project-content">
                <div className="project-tags static-tags"><span className="project-tag">TypeScript</span><span className="project-tag">OOP</span><span className="project-tag">SOLID</span></div>
                <h3 className="project-title">Design Patterns Showcase</h3>
                <p className="project-description">A showcase of classic software design patterns implemented in TypeScript with clean modular code.</p>
                <div className="project-links"><a href="https://github.com/phoenixgoldz/design-patterns" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub"><span className="link-icon">↗</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title centered">Tech Stack</h2>
          <div className="skills-grid studio-skills">
            {[
              "Unreal Engine 5.8",
              "Blueprint Visual Scripting",
              "Unity",
              "C#",
              "C++",
              "JavaScript",
              "TypeScript",
              "React / Next.js",
              "Python",
              "GitHub LFS",
              "Blender",
              "Figma",
            ].map((skill) => (
              <div className="skill-item" key={skill}>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <h2 className="section-title">About Trevor Hicks</h2>
              <p className="section-text">I'm Trevor Hicks, founder of PhoenixGold Game Studios and a graduate of Neumont College of Computer Science.</p>
              <p className="section-text">I specialize in game development, software engineering, and creating engaging experiences that blend technical execution with creative design. My current flagship project is Eucalyptus Edge.</p>
              <div className="hero-buttons featured-buttons">
                <a href="https://github.com/phoenixgoldz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                <a href="https://www.linkedin.com/in/trevor-hicks2025/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-card-inner">
                <img src="/Images/TH_bannerimg.png" alt="Trevor Hicks" className="profile-image" />
                <div className="profile-overlay">
                  <h3 className="profile-name">Trevor Hicks</h3>
                  <p className="profile-title">Game Developer | Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title centered">Contact</h2>
          <p className="section-text centered studio-intro">
            Want to follow Eucalyptus Edge, collaborate, or connect about game development? Reach out through GitHub, LinkedIn, or the Kickstarter page.
          </p>
          <div className="hero-buttons featured-buttons centered-buttons">
            <a href="https://www.kickstarter.com/projects/phoenixgoldgames/eucalyptus-edge" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Kickstarter</a>
            <a href="https://github.com/phoenixgoldz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/trevor-hicks2025/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  )
}
