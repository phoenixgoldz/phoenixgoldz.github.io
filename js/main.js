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
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      });
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
