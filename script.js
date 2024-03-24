// Contact form submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('to', 'gkartikya5@gmail.com'); // Add your email address

    // Send the form data to your backend server
    fetch('/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            contactForm.reset();
        } else {
            formMessage.textContent = 'Something went wrong. Please try again later.';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Something went wrong. Please try again later.';
        console.error('Error:', error);
    });
});
