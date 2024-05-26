const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS package
const { Pool } = require('pg'); // Import the Pool class from the pg module
require('dotenv').config();

// Create a new instance of express
const app = express();

// Use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// Enable all CORS requests
app.use(cors());

// Initialize the Pool with the database connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Function to log the contents of the theories table
async function logTheoriesTable() {
    try {
        const result = await pool.query('SELECT * FROM theories');
        console.log('Contents of the theories table:', result.rows);
    } catch (error) {
        console.error('Error logging theories table:', error);
    }
}

// Define a GET endpoint for fetching theories
app.get('/api/theories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM theories');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching theories:', error);
        res.status(500).json({ error: 'Error fetching theories' });
    }
});

// Define a GET endpoint for fetching constructs associated with a theory
app.get('/api/constructs', async (req, res) => {
    const theory = req.query.theory;
    if (!theory) {
        return res.status(400).json({ error: 'Theory query parameter is required' });
    }

    try {
        const result = await pool.query('SELECT * FROM constructs WHERE theory_id = $1', [theory]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching constructs:', error);
        res.status(500).json({ error: 'Error fetching constructs' });
    }
});

// Define a GET endpoint for fetching processed tweets
app.get('/api/processed-tweets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM processed_tweets');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching processed tweets:', error);
        res.status(500).json({ error: 'Error fetching processed tweets' });
    }
});

// Define a POST endpoint for submitting data
app.post('/api/data', (req, res) => {
    console.log('Received data submission:', req.body);
    res.status(200).json({ message: 'Data received successfully.' });
});

// Define the port number as 3001
const PORT = 3001;

// Start the server and load the model
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await logTheoriesTable(); // Log the contents of the theories table after the server starts
    } catch (error) {
        console.error('Error logging the theories table:', error.message);
    }
});
