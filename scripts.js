// Mock job data
const jobs = [
    { title: 'Waiter', location: 'New York, NY', keywords: ['Customer Service', 'Food Service'] },
    { title: 'Cashier', location: 'San Francisco, CA', keywords: ['Customer Service', 'Retail'] },
    { title: 'Personal Assistant', location: 'Austin, TX', keywords: ['Organization', 'Administration'] },
    // ... add more mock jobs as needed ...
];

function applyForJob() {
    alert('You have applied for this job!');
}

async function register() {
    // ... existing register function ...
}

async function login() {
    // ... existing login function ...
}

async function postJob() {
    // ... existing postJob function ...
}

async function searchJobs() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();

    // Filter the jobs array by keyword and location
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(keyword) &&
        job.location.toLowerCase().includes(location)
    );

    // Get the job list element from the DOM
    const jobList = document.getElementById('jobList');

    // Clear any existing jobs from the job list
    jobList.innerHTML = '';

    // Append a div for each filtered job to the job list element
    filteredJobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>Location: ${job.location}</p>
            <p>Keywords: ${job.keywords.join(', ')}</p>
            <button type="button" onclick="applyForJob()">Apply Now</button>
        `;
        jobList.appendChild(jobDiv);
    });
}

// Load the jobs when the page loads
window.addEventListener('load', () => {
    // Get the job list element from the DOM
    const jobList = document.getElementById('jobList');

    // Append a div for each mock job to the job list element
    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>Location: ${job.location}</p>
            <p>Keywords: ${job.keywords.join(', ')}</p>
            <button type="button" onclick="applyForJob()">Apply Now</button>
        `;
        jobList.appendChild(jobDiv);
    });
});
