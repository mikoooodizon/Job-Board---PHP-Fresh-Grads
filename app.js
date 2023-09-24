const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/jobboard', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON bodies
app.use(express.json());

// Define User and Job Schemas and Models
const UserSchema = new mongoose.Schema({ username: String, password: String }); // Use hashed passwords in production
const User = mongoose.model('User', UserSchema);
const JobSchema = new mongoose.Schema({ title: String, description: String, keywords: [String], location: String });
const Job = mongoose.model('Job', JobSchema);

// Define routes for user registration, login, job posting, and job search
app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send('Registered successfully!');
});

app.post('/login', async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) res.send('Logged in successfully!');
    else res.status(401).send('Invalid credentials');
});

app.post('/post-job', async (req, res) => {
    const job = new Job(req.body);
    await job.save();
    res.send('Job posted successfully!');
});

app.get('/search', async (req, res) => {
    const { keyword, location } = req.query;
    const jobs = await Job.find({
        keywords: new RegExp(keyword, 'i'),
        location: new RegExp(location, 'i'),
    });
    res.json(jobs);
});

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000'));
