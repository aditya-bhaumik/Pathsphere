// // Function to generate the resume content dynamically
// function generateResume() {
//     const objective = document.getElementById('objective').value;
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const linkedin = document.getElementById('linkedin').value;
//     const education1 = document.getElementById('education1').value;
//     const education2 = document.getElementById('education2').value;
//     const experience = document.getElementById('experience').value;
//     const projects = document.getElementById('project').value;
//     const skills = document.getElementById('skills').value;
//     const achievements = document.getElementById('achievements').value;
//     const template = document.getElementById('templateSelector').value;

//     // Create the resume content
//     const resumeContent = `
        
//         <h4>${name}</h4>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>LinkedIn:</strong> ${linkedin}</p>
//         <h4>Objective</h4>
//         <p>${objective}</p>
//         <h4>Education</h4>
//         <p>${education1}</p>
//         <p>${education2}</p>
//         <h4>Experience</h4>
//         <p>${experience}</p>
//         <h4>Projects</h4>
//         <p>${projects}</p>
//         <h4>Skills</h4>
//         <p>${skills}</p>
//         <h4>Achievements</h4>
//         <p>${achievements}</p>
       
    
//     `;
    
//     const resumePreview = document.getElementById('resumeContent');
//     resumePreview.innerHTML = resumeContent;

//     // Remove any existing template classes
//     resumePreview.classList.remove('template1', 'template2');
    
//     // Apply the selected template style
//     resumePreview.classList.add(template);
// }


// function downloadResume() {
//     const element = document.getElementById('resumeContent');
    
//     html2pdf()
//         .from(element)
//         .set({
//             margin: 1,
//             filename: 'resume.pdf',
//             html2canvas: { scale: 2 },
//             jsPDF: { orientation: 'portrait' }
//         })
//         .save();
// }

//     document.addEventListener('DOMContentLoaded', () => {
//     const cursor = document.createElement('div');
//     cursor.classList.add('custom-cursor');
//     const cursorShadow = document.createElement('div');
//     cursorShadow.classList.add('custom-cursor-shadow');
//     document.body.appendChild(cursor);
//     document.body.appendChild(cursorShadow);
  
//     document.addEventListener('mousemove', (e) => {
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;
//       cursorShadow.style.left = `${e.clientX}px`;
//       cursorShadow.style.top = `${e.clientY}px`;
  
//       // Move the h1 element
//       const h1 = document.querySelector('h1');
//       const rect = h1.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;
//       const deltaX = (e.clientX - centerX) / 20;
//       const deltaY = (e.clientY - centerY) / 20;
//       h1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  
//       // Update container shadow
//       const container = document.querySelector('.container');
//       container.style.setProperty('--x', `${e.clientX}px`);
//       container.style.setProperty('--y', `${e.clientY}px`);
//     });
  
//     document.addEventListener('mousedown', () => {
//       cursor.style.transform = 'scale(0.8)';
//       cursorShadow.style.transform = 'scale(0.8)';
//     });
  
//     document.addEventListener('mouseup', () => {
//       cursor.style.transform = 'scale(1)';
//       cursorShadow.style.transform = 'scale(1)';
//     });
//   });

// Main function to initialize the application
function initApp() {
    setupEventListeners();
    setupCursorEffects();
}

// Set up event listeners for the application
function setupEventListeners() {
    document.getElementById('generateBtn').addEventListener('click', generateResume);
    document.getElementById('downloadBtn').addEventListener('click', downloadResume);
    document.getElementById('templateSelector').addEventListener('change', updatePreviewTemplate);
    
    // Add real-time preview updates
    const inputFields = document.querySelectorAll('input, textarea, select');
    inputFields.forEach(field => {
        field.addEventListener('input', debounce(generateResume, 300));
    });
}

// Debounce function to limit how often a function is called
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

// Function to generate the resume content dynamically
function generateResume() {
    const resumeContent = document.getElementById("resumeContent");
    const objective = document.getElementById("objective").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;

    // Collect education details
    const educationEntries = document.querySelectorAll(".education-entry");
    let educationHTML = "<h4>Education</h4>";
    educationEntries.forEach(entry => {
        const institution = entry.querySelector('input[name="education"]').value;
        const year = entry.querySelector('input[name="year"]').value;
        const grade = entry.querySelector('input[name="grade"]').value;
        educationHTML += `<p>${institution} - ${year} - ${grade}</p>`;
    });

    const experience = document.getElementById("experience").value;
    const project = document.getElementById("project").value;
    const skills = document.getElementById("skills").value;
    const achievements = document.getElementById("achievements").value;

    // Constructing resume content
    resumeContent.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: ${linkedin}</p>
        <h4>Objective</h4>
        <p>${objective}</p>
        ${educationHTML} <!-- Education Section -->
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Projects</h4>
        <p>${project}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Achievements</h4>
        <p>${achievements}</p>
    `;
}


// Function to update the preview template
function updatePreviewTemplate(template) {
    const resumePreview = document.getElementById('resumeContent');
    resumePreview.classList.remove('template1', 'template2');
    resumePreview.classList.add(template);
}

// Function to download the resume as PDF
function downloadResume() {
    const element = document.getElementById('resumeContent');
    const name = document.getElementById('name').value.trim() || 'resume';
    
    html2pdf()
        .from(element)
        .set({
            margin: [20, 20],
            filename: `${name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        })
        .save();
}

// Setup cursor effects
function setupCursorEffects() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    const cursorShadow = document.createElement('div');
    cursorShadow.classList.add('custom-cursor-shadow');
    document.body.appendChild(cursor);
    document.body.appendChild(cursorShadow);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', () => scaleCustomCursor(0.8));
    document.addEventListener('mouseup', () => scaleCustomCursor(1));
}

// Handle mouse movement
function handleMouseMove(e) {
    const cursor = document.querySelector('.custom-cursor');
    const cursorShadow = document.querySelector('.custom-cursor-shadow');
    const h1 = document.querySelector('h1');
    const container = document.querySelector('.container');

    updateElementPosition(cursor, e.clientX, e.clientY);
    updateElementPosition(cursorShadow, e.clientX, e.clientY);
    moveHeading(h1, e.clientX, e.clientY);
    updateContainerShadow(container, e.clientX, e.clientY);
}
function addEducation() {
    const educationFields = document.getElementById("educationFields");
    const educationEntry = document.createElement("div");
    educationEntry.classList.add("form-field", "education-entry");
    educationEntry.innerHTML = `
        <input type="text" name="education" placeholder="Institution Name" required><br>
        <input type="text" name="year" placeholder="Year of Graduation" required><br>
        <input type="text" name="grade" placeholder="Grade/Percentage" required><br>
        <button type="button" onclick="removeEducation(this)">Remove</button><br>
    `;
    educationFields.appendChild(educationEntry);
}

function removeEducation(button) {
    const educationEntry = button.parentElement;
    educationEntry.remove();
}

function applyTemplate(template) {
    const resumeContent = document.getElementById('resumeContent');
    const classicBtn = document.getElementById('classicTemplateBtn');
    const modernBtn = document.getElementById('modernTemplateBtn');

    // Switch template class
    resumeContent.className = template;

    // Toggle active button styles
    if (template === 'template1') {
        classicBtn.classList.add('active');
        modernBtn.classList.remove('active');
    } else {
        modernBtn.classList.add('active');
        classicBtn.classList.remove('active');
    }

    // Prevent page refresh
    return false;
}



// Update element position
function updateElementPosition(element, x, y) {
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

// Move heading based on cursor position
function moveHeading(heading, cursorX, cursorY) {
    const rect = heading.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (cursorX - centerX) / 20;
    const deltaY = (cursorY - centerY) / 20;
    heading.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}

// Update container shadow
function updateContainerShadow(container, x, y) {
    container.style.setProperty('--x', `${x}px`);
    container.style.setProperty('--y', `${y}px`);
}

// Scale custom cursor
function scaleCustomCursor(scale) {
    const cursor = document.querySelector('.custom-cursor');
    const cursorShadow = document.querySelector('.custom-cursor-shadow');
    cursor.style.transform = `scale(${scale})`;
    cursorShadow.style.transform = `scale(${scale})`;
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);