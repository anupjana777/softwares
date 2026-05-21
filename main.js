// Ensure functions run only after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. TAB SWITCHING LOGIC ---
    // Select all tab buttons and tab content sections
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // Add a click listener to every tab button
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the ID of the tab we want to open (from the button's onclick attribute in HTML)
            // Example: from onclick="openTab(event, 'tab-opt')", we extract 'tab-opt'
            const onclickAttr = this.getAttribute("onclick");
            const targetTabId = onclickAttr.match(/'([^']+)'/)[1]; 

            // Hide all tab content
            tabContents.forEach(content => {
                content.classList.remove("active");
            });

            // Remove 'active' styling from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Show the target tab content and highlight the clicked button
            document.getElementById(targetTabId).classList.add("active");
            this.classList.add("active");
        });
    });

    // --- 2. FOOTER YEAR LOGIC ---
    // Set the current year dynamically
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // --- 3. FORM LOGIC ---
    const formElement = document.getElementById('feedbackForm');
    if (formElement) {
        formElement.addEventListener('submit', function() {
            console.log("Feedback form submitted.");
        });
    }
});
