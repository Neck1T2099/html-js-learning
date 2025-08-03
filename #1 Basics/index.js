// Reveal lines sequentially on left-click

alert("Just click on this page to display anything")

const content = document.querySelector('.content');
const lines = Array.from(content.children);
let index = 0;

document.addEventListener('click', function handler(event) {
  event.preventDefault();
  if (event.button !== 0) return; // only lmc nigga

  if (!content.classList.contains('visible')) {
    content.classList.add('visible');
  }

  if (index < lines.length) {
    lines[index].classList.add('visible');
    index++;
  } else {
    document.removeEventListener('click', handler);
  }
});
