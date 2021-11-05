let aboutMeBtn = document.querySelector('#about-me');
let projectsBtn = document.querySelector('#projects');
let contactBtn = document.querySelector('#contact-me');
let resumeBtn = document.querySelector('#resume');

const workHistory=[
    "Spent 4 years in operations within the biotech industry",
    "Worked 2 years in production",
    "Worked 1 year in quality",
    "Worked 1 year in process sustaining"
]

const languages=[
    "Versed in the following languages",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Python",
    "R",
    "Frameworks:",
    "Bootstrap",
    
]

//projectsBtn.addEventListener('click', changeLocation);

projectsBtn.addEventListener('click', toProjects);

resumeBtn.addEventListener('click', toResume);

function toProjects() {
    location.href='./projects.html'
}

function toResume() {
    location.href='./resume.html'
}



// function changeLocation() {
//     //location.href='./aboutMe.html'
    
//     if(resumeBtn.click) {
//         location.href='./resume.html'
//     }

//     if(projectsBtn.click) {
//         location.href='./projects.html'
//     }
// }
