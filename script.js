// Hamburger Menü
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animasyonları
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// CSS ile birlikte çalışacak görünürlük sınıfı
document.styleSheets[0].insertRule(`
    .section {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease-in-out;
    }
`, 0);

document.styleSheets[0].insertRule(`
    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`, 0);