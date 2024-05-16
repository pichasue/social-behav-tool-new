const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node'); // Import TensorFlow.js for Node.js
const cors = require('cors'); // Import CORS package
const { preprocessData } = require('./src/data_preprocessing'); // Import the preprocessData function
const model = require('./src/predictive_model').default; // Import the TensorFlow.js model

// Create a new instance of express
const app = express();

// Use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// Enable all CORS requests
app.use(cors());

// Mock data for theories and constructs
const theories = [
  {
    id: 1,
    name: 'Theory of Planned Behavior',
    constructs: ['Attitude', 'Subjective Norm', 'Perceived Behavioral Control']
  },
  // ... other theories
];

// AI model inference
async function performInference(preprocessedData) {
    console.log('Performing inference on data:', preprocessedData);
    // Convert the preprocessed data to a tensor
    const inputData = tf.tensor2d(preprocessedData.map(d => d.normalizedValue));
    // Perform inference
    const predictions = model.predict(inputData);
    // Convert tensor to array to send back to client
    return predictions.arraySync();
}

// Define a GET endpoint for fetching theories
app.get('/api/theories', (req, res) => {
    res.json(theories);
});

// Define a POST endpoint for submitting data
app.post('/api/data', (req, res) => {
    console.log('Received data submission:', req.body);
    res.status(200).json({ message: 'Data received successfully.' });
});

// Define a POST endpoint for AI interaction
app.post('/api/ai-interaction', async (req, res) => {
    const data = req.body.data;
    console.log('Received data:', data);

    // Validate that each data point has 'value', 'min', and 'max' as numbers
    const isValidData = data.every(d => typeof d.value === 'number' && typeof d.min === 'number' && typeof d.max === 'number');
    console.log('Is valid data:', isValidData);

    if (!isValidData) {
        return res.status(400).json({ error: "Invalid data format: 'value', 'min', and 'max' fields must be numbers." });
    }

    try {
        const preprocessedData = preprocessData(data);
        const aiResponse = await performInference(preprocessedData);
        res.json({ results: aiResponse });
    } catch (error) {
        console.error('Error during AI interaction:', error);
        res.status(500).json({ error: 'Error during AI interaction' });
    }
});

// Define the port number as 3001
const PORT = 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
