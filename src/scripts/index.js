const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav')

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('hidden');
})