// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Add Active Class to Navigation Links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust this value as needed
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (`#${currentSection}` === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });
});
