// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileLinks = document.querySelectorAll(".mobile-link")

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  })

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      document.body.classList.remove("no-scroll")
    })
  })
}

// Navbar scroll effect
const navbar = document.querySelector(".navbar")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScrollTop = scrollTop
})

// Particle animation
const canvas = document.getElementById("particles-canvas")
if (canvas) {
  const ctx = canvas.getContext("2d")

  // Set canvas dimensions
  const setCanvasDimensions = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 1
      this.speedX = Math.random() * 1 - 0.5
      this.speedY = Math.random() * 1 - 0.5
      this.color = `rgba(255, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 50) + 50}, ${Math.random() * 0.3 + 0.1})`
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      // Bounce off edges
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX
      }

      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY
      }
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Create particles
  const particles = []
  const particleCount = Math.min(100, Math.floor(window.innerWidth / 20))

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // Animation loop
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const particle of particles) {
      particle.update()
      particle.draw()
    }

    // Connect particles with lines if they are close enough
    connectParticles()

    requestAnimationFrame(animateParticles)
  }

  // Connect particles with lines
  function connectParticles() {
    const maxDistance = 150

    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = `rgba(255, 179, 71, ${opacity * 0.2})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  // Start animation
  animateParticles()
}

// Form submission handling
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML

    submitButton.disabled = true
    submitButton.innerHTML = `
      <svg class="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-opacity="0.3"></circle>
        <path class="spinner-head" d="M12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      </svg>
      Sending...
    `

    // Simulate API call
    setTimeout(() => {
      // Show success message
      const formElements = contactForm.querySelectorAll("input, textarea, button")
      formElements.forEach((el) => (el.disabled = true))

      const successMessage = document.createElement("div")
      successMessage.className = "form-success"
      successMessage.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Thank you! Your message has been sent successfully.</p>
      `

      contactForm.appendChild(successMessage)

      // Reset form after 5 seconds
      setTimeout(() => {
        contactForm.reset()
        formElements.forEach((el) => (el.disabled = false))
        submitButton.innerHTML = originalText
        contactForm.removeChild(successMessage)
      }, 5000)
    }, 2000)
  })
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".section")

const revealOnScroll = () => {
  for (const el of revealElements) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll)
revealOnScroll()

// Add active class to navbar links based on scroll position
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links a")

function highlightNavLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightNavLink)
