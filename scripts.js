function applyForJob() {
    alert('You have applied for this job!');
}

async function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    try {
        await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        alert('Registered successfully!');
    } catch (err) {
        alert('Registration failed!');
    }
}

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    try {
        await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        alert('Logged in successfully!');
    } catch (err) {
        alert('Login failed!');
    }
}

async function postJob() {
    const title = document.getElementById('jobTitle').value;
    const description = document.getElementById('jobDescription').value;
    const keywords = document.getElementById('jobKeywords').value.split(','); // Assuming keywords are comma-separated
    const location = document.getElementById('jobLocation').value;
    try {
        await fetch('http://localhost:3000/post-job', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, keywords, location }),
        });
        alert('Job posted successfully!');
    } catch (err) {
        alert('Job posting failed!');
    }
}

async function searchJobs() {
    const keyword = document.getElementById('keyword').value;
    const location = document.getElementById('location').value;
    try {
        const response = await fetch(`http://localhost:3000/search?keyword=${keyword}&location=${location}`);
        const jobs = await response.json();
        // Display the jobs (not implemented in this example)
    } catch (err) {
        alert('Search failed!');
    }
}

// ... other parts of your JavaScript ...

async function loadJobs() {
    try {
        // Fetch jobs from the server
        const response = await fetch('http://localhost:3000/api/jobs');
        const jobs = await response.json();
        
        // Get the job list element from the DOM
        const jobList = document.getElementById('jobList');
        
        // Create and append a div for each job to the job list element
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
    } catch (err) {
        console.error('Error loading jobs:', err);
    }
}

// Load the jobs when the page loads
window.addEventListener('load', loadJobs);

// ... other parts of your JavaScript ...

window.addEventListener('load', () => {
    // Define some mock job data
    const mockJobs = [
        { title: 'Secretary', location: 'Los Angeles, CA', keywords: ['Organization', 'Administration'] },
        { title: 'Receptionist', location: 'Chicago, IL', keywords: ['Customer Service', 'Telephone'] },
        { title: 'Data Entry Clerk', location: 'Houston, TX', keywords: ['Typing', 'Data Processing'] },
        // ... add more mock jobs as needed ...
    ];
    
    // Get the job list element from the DOM
    const jobList = document.getElementById('jobList');
    
    // Append a div for each mock job to the job list element
    mockJobs.forEach(job => {
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

// ... other parts of your JavaScript ...

window.addEventListener('load', () => {
    // Define some mock job data
    const mockJobs = [
        { title: 'Secretary', location: 'Los Angeles, CA', keywords: ['Organization', 'Administration'] },
        { title: 'Receptionist', location: 'Chicago, IL', keywords: ['Customer Service', 'Telephone'] },
        { title: 'Data Entry Clerk', location: 'Houston, TX', keywords: ['Typing', 'Data Processing'] },
        // ... add more mock jobs as needed ...
    ];
    
    // Get the job list element from the DOM
    const jobList = document.getElementById('jobList');
    
    // Append a div for each mock job to the job list element
    mockJobs.forEach(job => {
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
