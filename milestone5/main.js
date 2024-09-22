var form = document.getElementById("form");
var form_displayElement = document.getElementById("display-resume");
var link_container = document.getElementById("link-container");
var shareablelink_Element = document.getElementById("shareable-link");
var download_PDF = document.getElementById("download-pdf");
// now Handling form submissin
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // save formm data in local storage wih the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //  Generating resume content dynamically
    var html_resume = "\n    <h2><b>Shareable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span> </p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, " </span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, " </span></p>\n\n    <h3>Education:</h3>\n    <p contenteditable=\"true\"> ").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display the generated Resume
    form_displayElement.innerHTML = html_resume;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    // `${window.location.origin}?username=${encodeURIComponent(username)}`;
    // Display the shareable link
    link_container.style.display = 'block';
    shareablelink_Element.href = shareableURL;
    shareablelink_Element.textContent = shareableURL;
});
download_PDF.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save
    // as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
