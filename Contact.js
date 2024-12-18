document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting in the traditional way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending the message
    document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent. We will contact you at ${email} soon.`;
    
    // Clear the form after submission
    document.getElementById('contactForm').reset();
});