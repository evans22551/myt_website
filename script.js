// Script to set the current year in the footer and handle the contact form.
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer dynamically
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Handle contact form submission. To prevent page from reloading when a user uses the send button
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the page from actually refreshing
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset(); // Clear the form inputs
        });
    }
});
