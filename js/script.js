const botao = document.querySelector("#hamb-btt");
const menu = document.querySelector("#navbar-links");

botao.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  menu.classList.toggle("active");
  botao.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== botao) {
    menu.classList.remove('active');
    botao.classList.remove('open')
  }
});