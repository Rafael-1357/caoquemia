const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  if (menu.classList.toggle('mobile')) {
    console.log('sim')
    menu.classList.remove('hidden')
    return
  }
  menu.classList.add('hidden')
  // menu.style.display = 'flex';
  // menu.classList.add('absolute');
  // menu.classList.add('top-0');
  // menu.classList.add('left-0');
  // menu.classList.add('h-auto');
  // menu.classList.add('flex-col');
  // menu.classList.add('pt-[120px]');
  // menu.classList.add('pb-[10px]');
  // menu.classList.add('rounded-b-lg');
  // menu.classList.add('gap-5');
  // menu.classList.add('bg-blur');
  // nav.classList.add('flex-col');
});