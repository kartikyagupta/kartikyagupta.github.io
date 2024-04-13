// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const params = {
        to_name: "Kartikya Gupta",
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send("service_t949ogd", "template_cgoklj8", params)
        .then(function(response) {
            formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
            contactForm.reset();
            console.log("Email sent successfully:", response);
        }, function(error) {
            formMessage.textContent = "Sorry, there was an error sending your message. Please try again later.";
            console.error("Email send failed:", error);
        });
});

});