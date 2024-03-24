// Contact form submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Assuming you have a backend to handle form submission and send email
    // Here, we'll just display a success message
    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    contactForm.reset();

    // You can add logic here to send form data to your email address
    // Example AJAX call or fetch request to your backend
});
