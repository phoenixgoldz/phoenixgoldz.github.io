/* Eucalyptus Edge: MegaBlast Mayhem — navigation and accessibility behavior. */
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  if (menuButton && menu) {
    const setOpen = (open) => {
      menuButton.classList.toggle('active', open);
      menu.classList.toggle('active', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('mobile-menu-open', open);
    };
    menuButton.addEventListener('click', () => setOpen(!menu.classList.contains('active')));
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        setOpen(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (menu.classList.contains('active') && !menu.contains(event.target) && !menuButton.contains(event.target)) setOpen(false);
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 1180) setOpen(false); });
  }

  const bar = document.querySelector('.mbm-navbar');
  if (bar) {
    const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', hash);
    });
  });
});
