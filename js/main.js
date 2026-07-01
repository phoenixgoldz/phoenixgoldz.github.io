document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const revealElements = document.querySelectorAll(".reveal");

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear().toString();
  }

  if (menuBtn && mobileMenu) {
    function closeMenu() {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }

    function openMenu() {
      menuBtn.classList.add("active");
      mobileMenu.classList.add("active");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
    }

    menuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
    });

    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = mobileMenu.contains(event.target);
      const clickedMenuButton = menuBtn.contains(event.target);

      if (mobileMenu.classList.contains("active") && !clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeMenu();
    });
  }

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#" || !targetId.startsWith("#")) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({ top: targetElement.offsetTop - 82, behavior: "smooth" });
        history.pushState(null, "", targetId);
      }
    });
  });

  if (revealElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

      revealElements.forEach((element) => revealObserver.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("visible"));
    }
  }
});
