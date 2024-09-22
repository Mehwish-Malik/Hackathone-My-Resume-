const form = document.getElementById("form") as HTMLFormElement;
const form_displayElement = document.getElementById("display-resume") as HTMLDivElement;
// now Handling form submissin
form.addEventListener("submit" ,(event:Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
     const phone = (document.getElementById("phone") as HTMLInputElement).value
     const education = (document.getElementById("education") as HTMLInputElement).value
     const experiance = (document.getElementById("experiance") as HTMLInputElement).value
     const skills = (document.getElementById("skills") as HTMLInputElement).value

    //  Generating resume content dynamically
    const html_resume = `
    <h2><b>Editable Resume<b><h2>
    <h3>Personal Information<h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span> </p>
    <p><b>Email:</b><span contenteditable="true">${email} </span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone} </span></p>

    <h3>Education:</h3>
    <p contenteditable="true"> ${education}</p>

    <h3>Experiance:</h3>
    <p contenteditable="true">${experiance}</p>

    <h3>Skills:</h3>
    <p contenteditable="true">${skills}</p>`;
    
    // Display the generated Resume
    if(form_displayElement){
        form_displayElement.innerHTML = html_resume;
    }else {
        console.log("Some Required Field is Missing");
        
    }

})