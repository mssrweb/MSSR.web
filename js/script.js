const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.line');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    lines.forEach(line => line.classList.toggle('active'));
});