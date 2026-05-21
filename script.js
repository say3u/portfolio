// Card click-to-expand
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    card.classList.toggle('open');
  });
});

// Floating back button
const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
  backBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal (skip hero so it's visible immediately)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section:not(#hero), .project-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
