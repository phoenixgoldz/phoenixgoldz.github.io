/* PhoenixGold Game Studios — shared behavior for the MegaBlast Mayhem homepage. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const header = document.getElementById('pg-header');
  if (header) {
    const onScroll = () => { header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false'; };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const btn = header.querySelector('.pg-menu-btn');
    const nav = header.querySelector('.pg-nav');
    if (btn && nav) {
      const setOpen = (open) => {
        header.dataset.open = String(open);
        btn.setAttribute('aria-expanded', String(open));
        btn.textContent = open ? 'Close' : 'Menu';
      };
      btn.addEventListener('click', () => setOpen(header.dataset.open !== 'true'));
      nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && header.dataset.open === 'true') { setOpen(false); btn.focus(); }
      });
      document.addEventListener('click', (e) => {
        if (header.dataset.open === 'true' && !header.contains(e.target)) setOpen(false);
      });
      window.addEventListener('resize', () => { if (window.innerWidth > 1120) setOpen(false); });
    }
  }

  const page = document.body.dataset.page;
  if (page) {
    const current = document.querySelector('.pg-nav a[data-nav="' + page + '"]');
    if (current) current.setAttribute('aria-current', 'page');
  }

  const reveals = document.querySelectorAll('.pg-reveal');
  if (!reveals.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); observer.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach((el) => observer.observe(el));
})();
