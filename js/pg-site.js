/* PhoenixGold — shared site behaviour.
   Small on purpose: a three-page marketing site does not need a framework. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* Header gains a rule once you leave the hero, so it reads as a bar
     over content rather than floating chrome on the hero itself. */
  var header = document.getElementById('pg-header');
  if (header) {
    var onScroll = function () {
      header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });

    var btn = header.querySelector('.pg-menu-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var open = header.dataset.open === 'true';
        header.dataset.open = open ? 'false' : 'true';
        btn.setAttribute('aria-expanded', String(!open));
      });
      header.querySelectorAll('.pg-nav a').forEach(function (a) {
        a.addEventListener('click', function () {
          header.dataset.open = 'false';
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* Mark the current page in the nav from <body data-page>. One source,
     so a new page cannot forget to highlight itself. */
  var page = document.body.dataset.page;
  if (page) {
    var link = document.querySelector('.pg-nav a[data-nav="' + page + '"]');
    if (link) link.setAttribute('aria-current', 'page');
  }

  /* Scroll reveal. Honours reduced motion by simply showing everything. */
  var reveals = document.querySelectorAll('.pg-reveal');
  if (!reveals.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .1 });
  reveals.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
    io.observe(el);
  });
})();
