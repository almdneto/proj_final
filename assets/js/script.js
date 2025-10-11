const menuBtn = document.getElementById('hamburguer-mn');
const navLinks = document.getElementById('navbar-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('ativo');

  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
});
