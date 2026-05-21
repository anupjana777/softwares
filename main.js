// Set the current year in the footer dynamically
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Basic form submission logic logging
    const formElement = document.getElementById('feedbackForm');
    if (formElement) {
        formElement.addEventListener('submit', function(e) {
            console.log("Feedback form submitted.");
        });
    }
});