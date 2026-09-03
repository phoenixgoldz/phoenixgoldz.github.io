/* PhoenixGold — shared nav behaviour: scrolled state + scroll progress hairline.
   Safe to load on any page; each block does nothing if its markup is absent. */
(function () {
  'use strict';

  /* The bar tightens and its rule strengthens once you leave the hero. */
  var header = document.getElementById('pg-header');
  if (header) {
    var onHeader = function () {
      header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    };
    onHeader();
    addEventListener('scroll', onHeader, { passive: true });
  }

  var gameBar = document.querySelector('.ee-navbar, .mbm-navbar');
  if (gameBar) {
    var onGameBar = function () {
      gameBar.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onGameBar();
    addEventListener('scroll', onGameBar, { passive: true });
  }

  /* Gold progress hairline under the bar. */
  var fill = document.querySelector('[data-pg-progress]');
  if (fill) {
    var onProgress = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    };
    onProgress();
    addEventListener('scroll', onProgress, { passive: true });
    addEventListener('resize', onProgress);
  }

  /* Footer year, for pages without their own script. */
  var year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
