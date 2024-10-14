function sendMail() {

    // Clear previous status messages
    document.getElementById('name-status').innerText = '';
    document.getElementById('email-status').innerText = '';
    document.getElementById('subject-status').innerText = '';
    document.getElementById('msg-status').innerText = '';

    let parms = {
        fname: document.getElementById("fname").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    // Validate name
    if (parms.fname === "") {
        document.getElementById('name-status').innerText = "Name is required.";
        return;
    }

    // Validate email
    if (parms.email === "") {
        document.getElementById('email-status').innerText = "Email is required.";
        return; 
    }

    // Validate email format using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(parms.email)) {
        document.getElementById('email-status').innerText = "Please enter a valid email address.";
        return;
    }

    // Validate subject
    if (parms.subject === "") {
        document.getElementById('subject-status').innerText = "Subject is required.";
        return;
    }

    // Validate message
    if (parms.message === "") {
        document.getElementById('msg-status').innerText = "Message is required.";
        return; 
    }

    // // Call EmailJS with the service ID, template ID, and parameters
    emailjs.send(window.emailConfig.serviceId, window.emailConfig.templateId, parms)
        .then(function(response) {
            alert("Email has been sent successfully!");
            location.href = "index.html";
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.error("Error:", error);
        });
}
