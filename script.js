(function () {
  'use strict';

  // Smooth scroll for in-page nav links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Optional: fade-in sections when they enter the viewport
  var sections = document.querySelectorAll('.reveal-ready');
  if (sections.length === 0) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    sections.forEach(function (el) {
      el.classList.add('reveal');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    },
    { rootMargin: '0px 0px -80px 0px', threshold: 0 }
  );

  sections.forEach(function (el) {
    observer.observe(el);
  });
})();
