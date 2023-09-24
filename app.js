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
  
  