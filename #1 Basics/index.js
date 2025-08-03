// Reveal content on right-click
// Prevent default context menu on first click and fade in the text pls

document.addEventListener('contextmenu', function handler(event) {
  event.preventDefault();
  const content = document.querySelector('.content');
  content.classList.add('visible');
  document.removeEventListener('contextmenu', handler);
});
