var form = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resumeDisplay");
var downloadlink = document.getElementById("downloadlink");
var shareableLink = document.getElementById("shareableLink");
var downloadbtn = document.getElementById("downloadbtn");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("Username")
        .value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    var resumeData = {
        name: name,
        email: email,
        number: number,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHtml = "\n    <h2>My Editable Resume</h2>\n    <h3> Personal Information</h3>\n    <p>Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p>Number:<span contenteditable=\"true\"> ").concat(number, "</span></p>\n\n    <h3> Education</h3>\n    <p contenteditable=\"true\">Education: ").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p contenteditable=\"true\">Experience: ").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">Skills: ").concat(skills, "</p>\n\n\n    ");
    resumeDisplay.innerHTML = resumeHtml;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    downloadlink.style.display = "block";
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});
downloadbtn.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        "";
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("Username").value =
                username;
            document.getElementById("name").value =
                resumeData.name;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("number").value =
                resumeData.number;
            document.getElementById("education").value =
                resumeData.education;
            document.getElementById("experience").value =
                resumeData.experience;
            document.getElementById("skills").value =
                resumeData.skills;
        }
    }
});
