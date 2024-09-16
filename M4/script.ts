let form=document.getElementById('resumeForm') as HTMLFormElement;
let resumeDisplay=document.getElementById('resumeDisplay') as HTMLDivElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const number = (document.getElementById('number') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHtml= `
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
    if (resumeDisplay){
        resumeDisplay.innerHTML=resumeHtml;
    }else{
        console.error('The resume display is missing')
    }

})