document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const navLinks = document.querySelectorAll('a[href^="#"]');

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear().toString();
  }

  if (menuBtn && mobileMenu) {

  function closeMenu() {
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  function openMenu() {
    menuBtn.classList.add("active");
    mobileMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (mobileMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
  }
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        history.pushState(null, "", targetId);
      }
    });
  });
});
