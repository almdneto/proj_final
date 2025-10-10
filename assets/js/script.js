const menuBtn = document.getElementById('hamburguer-mn');
const navLinks = document.getElementById('navbar-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
