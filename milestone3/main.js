var form = document.getElementById("form");
var form_displayElement = document.getElementById("display-resume");
// now Handling form submissin
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experiance = document.getElementById("experiance").value;
    var skills = document.getElementById("skills").value;
    //  Generating resume content dynamically
    var html_resume = "\n    <h2><b>Resume<b><h2>\n    <h3>Personol Information<h3>\n    <p><b>Name:</b>".concat(name, " </p>\n    <p><b>Email:</b>").concat(email, " </p>\n    <p><b>Phone:</b>").concat(phone, " </p>\n\n    <h3>Education:</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experiance:</h3>\n    <p>").concat(experiance, "</p>\n\n    <h3>Skills:</h3>\n    <p>").concat(skills, "</p>");
    // Display the generated Resume
    if (form_displayElement) {
        form_displayElement.innerHTML = html_resume;
    }
    else {
        console.log("Some Required Field is Missing");
    }
});
