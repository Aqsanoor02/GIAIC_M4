let form = document.getElementById("resumeForm") as HTMLFormElement;
let resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;
let downloadlink = document.getElementById("downloadlink") as HTMLDivElement;
let shareableLink = document.getElementById(
  "shareableLink"
) as HTMLAnchorElement;
let downloadbtn = document.getElementById("downloadbtn") as HTMLButtonElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById("Username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const number = (document.getElementById("number") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  const resumeData = {
    name,
    email,
    number,
    education,
    experience,
    skills,
  };

  localStorage.setItem(username, JSON.stringify(resumeData));

  const resumeHtml = `
    <h2>My Editable Resume</h2>
    <h3> Personal Information</h3>
    <p>Name: <span contenteditable="true">${name}</span></p>
    <p>Email: <span contenteditable="true">${email}</span></p>
    <p>Number:<span contenteditable="true"> ${number}</span></p>

    <h3> Education</h3>
    <p contenteditable="true">Education: ${education}</p>

    <h3> Experience</h3>
    <p contenteditable="true">Experience: ${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">Skills: ${skills}</p>


    `;

  resumeDisplay.innerHTML = resumeHtml;

  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;

  downloadlink.style.display = "block";
  shareableLink.href = shareableURL;
  shareableLink.textContent = shareableURL;

});

downloadbtn.addEventListener("click", () => {
  window.print();
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    const savedResumeData = localStorage.getItem(username);``
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("Username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("number") as HTMLInputElement).value =
        resumeData.number;
      (document.getElementById("education") as HTMLInputElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLInputElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLInputElement).value =
        resumeData.skills;
    }
  }
});
