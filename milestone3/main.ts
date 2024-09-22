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
    <h2><b>Resume<b><h2>
    <h3>Personol Information<h3>
    <p><b>Name:</b>${name} </p>
    <p><b>Email:</b>${email} </p>
    <p><b>Phone:</b>${phone} </p>

    <h3>Education:</h3>
    <p>${education}</p>

    <h3>Experiance:</h3>
    <p>${experiance}</p>

    <h3>Skills:</h3>
    <p>${skills}</p>`;
    
    // Display the generated Resume
    if(form_displayElement){
        form_displayElement.innerHTML = html_resume;
    }else {
        console.log("Some Required Field is Missing");
        
    }

})