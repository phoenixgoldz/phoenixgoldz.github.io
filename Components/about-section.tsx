import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-grid">
          <div className="section-content">
            <p className="hero-badge">Founder • Game Developer • Software Engineer</p>

            <h2 className="section-title font-display">About Trevor Hicks</h2>

            <p className="section-text">
              I'm Trevor Hicks, founder of PhoenixGold Game Studios and a graduate of Neumont College of
              Computer Science. I build games, software, and interactive experiences that combine strong
              technical systems with memorable creative direction.
            </p>

            <p className="section-text">
              My current flagship project is <span className="highlight">Eucalyptus Edge</span>, a
              family-friendly 3D weapon-based fighting game built in Unreal Engine 5.8. The project focuses
              on responsive melee combat, stylized Australian-inspired environments, original animal
              fighters, and the magical world of Verdantia.
            </p>

            <p className="section-text">
              PhoenixGold Game Studios is my path toward building original indie IPs with colorful worlds,
              expressive gameplay, and polished player-first design.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/phoenixgoldz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9178C5.99999 14.4337 8.19999 15.2063 10.2933 15.4616C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/trevor-hicks2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              <a
                href="https://pheonixgold.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Itch.io"
              >
                <span className="link-icon">🎮</span>
              </a>

              <Link href="/resume.pdf" target="_blank" className="btn btn-small">
                Resume
              </Link>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card-inner">
              <Image src="/Images/TH_bannerimg.png" alt="Trevor Hicks" fill className="profile-image" />
              <div className="profile-overlay">
                <h3 className="profile-name font-display">Trevor Hicks</h3>
                <p className="profile-title">Founder | PhoenixGold Game Studios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
