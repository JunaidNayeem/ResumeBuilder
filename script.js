function addNewSkill() {
    // console.log("add")

    let newNode = document.createElement('input')
    newNode.classList.add('form-control')
    newNode.classList.add('skField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", "Enter here")

    let skillFieldOb = document.getElementById("sk");
    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillFieldOb.insertBefore(newNode, skillAddButtonOb);
}
let educationCounter = 1; // Counter to give unique IDs to labels

// Function to add a new education section
function addEducation() {
    const educationContainer = document.getElementById("educationContainer");

    // Create a new div to hold the education fields
    const newEducation = document.createElement('div');
    newEducation.className = 'education';

    // Create input fields for university, degree, and graduation year
    const universityInput = document.createElement('input');
    universityInput.type = 'text';
    universityInput.name = 'university' + educationCounter;
    universityInput.placeholder = 'Enter here';
    universityInput.className = 'form-control';

    const degreeInput = document.createElement('input');
    degreeInput.type = 'text';
    degreeInput.name = 'degree' + educationCounter;
    degreeInput.placeholder = 'Enter here';
    degreeInput.className = 'form-control';

    const graduationYearInput = document.createElement('input');
    graduationYearInput.type = 'text';
    graduationYearInput.name = 'graduationYear' + educationCounter;
    graduationYearInput.placeholder = 'Enter here';
    graduationYearInput.className = 'form-control';

    // Create label elements for each input field
    const universityLabel = document.createElement('label');
    universityLabel.setAttribute('for', 'university' + educationCounter);
    universityLabel.textContent = 'University';

    const degreeLabel = document.createElement('label');
    degreeLabel.setAttribute('for', 'degree' + educationCounter);
    degreeLabel.textContent = 'Degree';

    const graduationYearLabel = document.createElement('label');
    graduationYearLabel.setAttribute('for', 'graduationYear' + educationCounter);
    graduationYearLabel.textContent = 'Graduation Year';

    // Increment the counter for unique IDs
    educationCounter++;

    // Append the labels and input fields to the newEducation div
    newEducation.appendChild(universityLabel);
    newEducation.appendChild(universityInput);
    newEducation.appendChild(degreeLabel);
    newEducation.appendChild(degreeInput);
    newEducation.appendChild(graduationYearLabel);
    newEducation.appendChild(graduationYearInput);

    // Append the newEducation div to the educationContainer
    educationContainer.appendChild(newEducation);
}



let workExperienceCounter = 1; // Counter to give unique IDs to labels

// Function to add a new work experience section
function addWorkExperience() {
    const workExperienceContainer = document.getElementById("workExperienceContainer");

    // Create a new div to hold the work experience fields
    const newWorkExperience = document.createElement('div');
    newWorkExperience.className = 'work-experience';

    // Create input fields for company name, position, and duration
    const companyNameInput = document.createElement('input');
    companyNameInput.type = 'text';
    companyNameInput.name = 'companyName' + workExperienceCounter;
    companyNameInput.placeholder = 'Enter here';
    companyNameInput.className = 'form-control';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position' + workExperienceCounter;
    positionInput.placeholder = 'Enter here';
    positionInput.className = 'form-control';

    const durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.name = 'duration' + workExperienceCounter;
    durationInput.placeholder = 'Enter here';
    durationInput.className = 'form-control';

    // Create label elements for each input field
    const companyNameLabel = document.createElement('label');
    companyNameLabel.setAttribute('for', 'companyName' + workExperienceCounter);
    companyNameLabel.textContent = 'Company Name';

    const positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', 'position' + workExperienceCounter);
    positionLabel.textContent = 'Position';

    const durationLabel = document.createElement('label');
    durationLabel.setAttribute('for', 'duration' + workExperienceCounter);
    durationLabel.textContent = 'Duration';

    // Increment the counter for unique IDs
    workExperienceCounter++;

    // Append the labels and input fields to the newWorkExperience div
    newWorkExperience.appendChild(companyNameLabel);
    newWorkExperience.appendChild(companyNameInput);
    newWorkExperience.appendChild(positionLabel);
    newWorkExperience.appendChild(positionInput);
    newWorkExperience.appendChild(durationLabel);
    newWorkExperience.appendChild(durationInput);

    // Append the newWorkExperience div to the workExperienceContainer
    workExperienceContainer.appendChild(newWorkExperience);
}




// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
}

// generating Resume
function generateResume() {
    // console.log("generating cv")
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    emailError.textContent = "";
    phoneError.textContent = "";

    // Validate email and phone number
    if (!validateEmail(email)) {
        emailError.textContent = "Invalid email address. Please enter a valid email.";
        return;
    }

    if (!validatePhoneNumber(phone)) {
        phoneError.textContent = "Invalid phone number. Please enter a 10-digit phone number.";
        return;
    }

    let nameField = document.getElementById("name").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    // For Personal Info
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("phoneT").innerHTML = document.getElementById("phone").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;

    document.getElementById("summaryT").innerHTML = document.getElementById("summary").value;


    // Education Details
    const educationContainer = document.getElementById("educationContainer");
    const educationDetails = educationContainer.getElementsByClassName("education");
    const educationDetailsList = [];

    for (let i = 0; i < educationDetails.length; i++) {
        const university = educationDetails[i].querySelector('input[name^="university"]').value;
        const degree = educationDetails[i].querySelector('input[name^="degree"]').value;
        const graduationYear = educationDetails[i].querySelector('input[name^="graduationYear"]').value;

        const educationDetail = `
            <li>
                <p>${university}</p>
                <p>${degree} </p>
                <p>${graduationYear}</p>
            </li>
        `;

        educationDetailsList.push(educationDetail);
    }

    const educationHTML = educationDetailsList.join('');
    const educationDetailsT = document.getElementById("educationDetailsT");
    educationDetailsT.innerHTML = educationHTML;
   
    // Work Experience
    const workExperienceContainer = document.getElementById("workExperienceContainer");
    const workExperiences = workExperienceContainer.getElementsByClassName("work-experience");
    const workExperienceDetails = [];

    for (let i = 0; i < workExperiences.length; i++) {
        const companyName = workExperiences[i].querySelector('input[name^="companyName"]').value;
        const position = workExperiences[i].querySelector('input[name^="position"]').value;
        const duration = workExperiences[i].querySelector('input[name^="duration"]').value;

        const workExperienceDetail = `<li>
            <p>${companyName}</p>
            <p>${position}</p>
            <p>${duration}</p>
            </li>
        `;

        workExperienceDetails.push(workExperienceDetail);
    }

    const workExperienceHTML = workExperienceDetails.join('<br>');
    document.getElementById("workExperienceList").innerHTML = workExperienceHTML;

    // Skills
    let skT = document.getElementsByClassName("skField")
    let str = ''

    for(let e of skT) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("skillsList").innerHTML = str;


    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";


}
document.querySelector("#resume-form button").addEventListener("click", generateResume);


function printResume(){
    window.print();
}