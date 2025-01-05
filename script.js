// script.js
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.bio-container');
  card.style.opacity = '0';
  setTimeout(() => {
    card.style.transition = 'opacity 1s ease-in-out';
    card.style.opacity = '1';
  }, 500);
});
