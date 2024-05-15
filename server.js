const express = require('express');
const cors = require('cors');
const theories = require('./mockData');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve mock dataset of theories
app.get('/api/theories', (req, res) => {
  res.json(theories);
});

// Placeholder route for AI interactions
app.post('/api/ai-interaction', (req, res) => {
  // This will be replaced with actual AI model interaction logic
  res.json({ message: 'AI Interaction endpoint hit', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
