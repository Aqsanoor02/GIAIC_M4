var form = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resumeDisplay');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2>My Editable Resume</h2>\n    <h3> Personal Information</h3>\n    <p>Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p>Number:<span contenteditable=\"true\"> ").concat(number, "</span></p>\n\n    <h3> Education</h3>\n    <p contenteditable=\"true\">Education: ").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p contenteditable=\"true\">Experience: ").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">Skills: ").concat(skills, "</p>\n\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display is missing');
    }
});
