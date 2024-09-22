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
    var html_resume = "\n    <h2><b>Editable Resume<b><h2>\n    <h3>Personol Information<h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span> </p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, " </span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, " </span></p>\n\n    <h3>Education:</h3>\n    <p contenteditable=\"true\"> ").concat(education, "</p>\n\n    <h3>Experiance:</h3>\n    <p contenteditable=\"true\">").concat(experiance, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display the generated Resume
    if (form_displayElement) {
        form_displayElement.innerHTML = html_resume;
    }
    else {
        console.log("Some Required Field is Missing");
    }
});
