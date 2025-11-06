// CONSTANTES
const botao = document.getElementById("hamb-btt");
const menu = document.getElementById("navbar-links");
const bttcont = document.getElementById("cont")
const navcont = document.getElementById("navcont")

// EVENTOS NAVBAR
botao.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  menu.classList.toggle("active");
  botao.classList.toggle('open');
  if (navcont.classList.contains('ativo')){
    navcont.classList.remove('ativo')
  }
});

document.addEventListener('click', (e) => {
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== botao) {
    menu.classList.remove('active');
    botao.classList.remove('open'); 
  }
});

bttcont.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
navcont.classList.toggle('ativo')
});

document.addEventListener('click', (e => {
  if (navcont.classList.contains('ativo') && !menu.contains(e.target) && e.target !== bttcont) {
    navcont.classList.remove('ativo')
  }
}))