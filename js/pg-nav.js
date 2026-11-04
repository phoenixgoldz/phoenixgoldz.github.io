/* PhoenixGold Game Studios — homepage scroll progress and footer year. */
(function () {
  'use strict';
  const progress = document.querySelector('[data-pg-progress]');
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
