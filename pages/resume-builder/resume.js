// Function to generate the resume content dynamically
function generateResume() {
    const objective = document.getElementById('objective').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const education1 = document.getElementById('education1').value;
    const education2 = document.getElementById('education2').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('project').value;
    const skills = document.getElementById('skills').value;
    const achievements = document.getElementById('achievements').value;
    const template = document.getElementById('templateSelector').value;

    // Create the resume content
    const resumeContent = `
        
        <h4>${name}</h4>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <h4>Objective</h4>
        <p>${objective}</p>
        <h4>Education</h4>
        <p>${education1}</p>
        <p>${education2}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Achievements</h4>
        <p>${achievements}</p>
       
    
    `;
    
    const resumePreview = document.getElementById('resumeContent');
    resumePreview.innerHTML = resumeContent;

    // Remove any existing template classes
    resumePreview.classList.remove('template1', 'template2');
    
    // Apply the selected template style
    resumePreview.classList.add(template);
}


function downloadResume() {
    const element = document.getElementById('resumeContent');
    
    html2pdf()
        .from(element)
        .set({
            margin: 1,
            filename: 'resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait' }
        })
        .save();
}

