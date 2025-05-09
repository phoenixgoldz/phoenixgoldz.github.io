// This file contains client-side JavaScript that will be loaded globally
// Most functionality has been moved to React components, but we keep some global utilities here

// Handle scroll reveal animation for non-React elements
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer if not handled by React
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement && !currentYearElement.textContent) {
    currentYearElement.textContent = new Date().getFullYear().toString()
  }

  // Scroll reveal animation for elements with data-scroll attribute
  const revealElements = document.querySelectorAll("[data-scroll]")

  const revealOnScroll = () => {
    for (const el of revealElements) {
      const windowHeight = window.innerHeight
      const elementTop = el.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll()

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })

        // Update URL without page jump
        history.pushState(null, null, targetId)
      }
    })
  })
})

// Add a custom cursor effect for interactive elements
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div")
  cursor.className = "custom-cursor"
  document.body.appendChild(cursor)

  const cursorDot = document.createElement("div")
  cursorDot.className = "cursor-dot"
  document.body.appendChild(cursorDot)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    cursorDot.style.left = e.clientX + "px"
    cursorDot.style.top = e.clientY + "px"
  })

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll("a, button, .interactive")

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover")
    })

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover")
    })
  })
})

// Add some CSS for the custom cursor
const style = document.createElement("style")
style.textContent = `
  .custom-cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255, 179, 71, 0.5);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, border-color 0.3s;
    z-index: 9999;
  }
  
  .cursor-dot {
    position: fixed;
    width: 8px;
    height: 8px;
    background-color: #ffb347;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 10000;
    transition: transform 0.1s;
  }
  
  .cursor-hover {
    width: 60px;
    height: 60px;
    border-color: rgba(255, 179, 71, 0.8);
    background-color: rgba(255, 179, 71, 0.1);
  }
  
  @media (max-width: 768px) {
    .custom-cursor, .cursor-dot {
      display: none;
    }
  }
`
document.head.appendChild(style)
