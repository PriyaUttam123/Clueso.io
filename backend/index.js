import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Mock database
const users = [];

app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ email, password });
    res.json({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', token: 'mock-jwt-token' });
});

app.get('/api/demo-status', (req, res) => {
    res.json({ status: 'active', message: 'Demo server is running smoothly' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
