document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuIcon.classList.remove('active');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuIcon.classList.remove('active');
    });
  });
});

 menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
 });

