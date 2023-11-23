 // Get the current year
 const currentYear = new Date().getFullYear();
 // Display the current year in the designated paragraph
 document.getElementById('currentYear').textContent = `© ${currentYear} Oq Tepa Lavash`;

 // scripts/script.js

 function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Simple validation: Check if name and email are not empty
    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    

    // If all validation passes, the form will be submitted
    return true;
}