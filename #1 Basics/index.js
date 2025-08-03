// Reveal content on right-click
// Prevent default context menu on first click and fade in the text pls

document.addEventListener('click', function handler(event) { // Im an idiot sorry
  event.preventDefault();
  const content = document.querySelector('.content');
  content.classList.add('visible');
  document.removeEventListener('click', handler); // ЛКМ блять и ПКМ перепутал 20 лет кстати
});
