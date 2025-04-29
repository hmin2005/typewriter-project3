const keys = document.querySelectorAll('.key');
const paper = document.getElementById('paper');

keys.forEach(key => {
  key.addEventListener('click', () => {
    paper.textContent += key.textContent;
  });
});
