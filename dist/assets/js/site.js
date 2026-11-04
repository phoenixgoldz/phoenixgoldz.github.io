(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-navigation');
  const label = document.querySelector('[data-menu-label]');
  const closeMenu = (restoreFocus = false) => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    label.textContent = 'Menu';
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    label.textContent = open ? 'Close' : 'Menu';
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  const desktop = window.matchMedia('(min-width: 1001px)');
  desktop.addEventListener('change', () => closeMenu());

  // Keep the poster as an ordinary YouTube link until someone chooses to play.
  document.querySelectorAll('[data-video]').forEach((frame) => {
    const poster = frame.querySelector('a');
    poster.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${frame.dataset.video}?autoplay=1&rel=0`;
      iframe.title = 'MegaBlast Mayhem official trailer';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      frame.replaceChildren(iframe);
      iframe.focus();
    });
  });

  const dialog = document.querySelector('[data-lightbox]');
  const links = [...document.querySelectorAll('[data-gallery]')];
  if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;
  const picture = dialog.querySelector('[data-lightbox-image]');
  const caption = dialog.querySelector('[data-lightbox-caption]');
  const count = dialog.querySelector('[data-gallery-count]');
  let selected = 0;
  let trigger;
  const showImage = (index) => {
    selected = (index + links.length) % links.length;
    const link = links[selected];
    picture.src = link.href;
    picture.alt = link.querySelector('img').alt;
    caption.textContent = link.dataset.caption;
    count.textContent = `${selected + 1} / ${links.length}`;
  };
  links.forEach((link, index) => link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger = link;
    showImage(index);
    dialog.showModal();
  }));
  dialog.querySelector('[data-gallery-prev]').addEventListener('click', () => showImage(selected - 1));
  dialog.querySelector('[data-gallery-next]').addEventListener('click', () => showImage(selected + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showImage(selected + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(selected - 1); }
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => trigger?.focus());
})();
