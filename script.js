// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

// Resume Request Form
const resumeForm = document.getElementById('resume-form');
const formMessage = document.getElementById('form-message');

resumeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Send form data to your email
    const formData = `Name: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:your-email@example.com?subject=Resume Request&body=${encodeURIComponent(formData)}`;
    window.open(mailtoLink);

    formMessage.textContent = `Thank you, ${name}! Your resume request has been sent.`;
    resumeForm.reset();
});
