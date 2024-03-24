// Contact form submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add logic here to handle the form submission, such as sending an email or storing the data
    // For now, we'll just display a success message
    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    contactForm.reset();
});
