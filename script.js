// Contact Form Validation
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation + Error Handling - Part 3 mark
    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    // Extra email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Simulate AJAX response - Processed Response mark
    document.getElementById("success-msg").style.display = "block"; 
    this.reset(); // clear form
});

// Enquiry Form Validation - same logic
document.getElementById("enquiry-form")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value.trim();
    const budget = document.getElementById("budget").value.trim();

    if (name === "" || email === "" || service === "" || budget === "") {
        alert("⚠️ Please complete all fields to start your project.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    document.getElementById("success-msg").style.display = "block";
    this.reset();
});
