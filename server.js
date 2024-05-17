const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node'); // Import TensorFlow.js for Node.js
const cors = require('cors'); // Import CORS package
const { preprocessData } = require('./src/data_preprocessing'); // Import the preprocessData function
const { getModel, loadModel } = require('./src/predictive_model'); // Import the getModel function and loadModel function

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
    // Retrieve the loaded model using the getModel function
    const model = getModel();
    // Check if the model is loaded before attempting to perform inference
    if (!model) {
        console.error('AI model is not loaded.');
        throw new Error('AI model is not loaded.');
    }
    // Convert the preprocessed data to a tensor with the correct shape
    // The model expects an input shape of [null, 10], so we create a tensor directly from preprocessedData
    const inputData = tf.tensor2d([preprocessedData], [1, 10]);
    // Perform inference
    const predictions = await model.predict(inputData).data();
    // Convert tensor to array to send back to client
    return predictions;
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
    console.log('Received data for AI interaction:', data);

    // Check if data is undefined or not an array
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid data format: Data should be an array of objects." });
    }

    // Validate that each data point has 'value', 'min', and 'max' as numbers
    const isValidData = data.every(d => typeof d.value === 'number' && typeof d.min === 'number' && typeof d.max === 'number');
    console.log('Is valid data:', isValidData);

    if (!isValidData) {
        return res.status(400).json({ error: "Invalid data format: 'value', 'min', and 'max' fields must be numbers." });
    }

    try {
        const preprocessedData = preprocessData(data);
        // Ensure the preprocessed data has exactly 10 elements
        if (preprocessedData.length !== 10) {
            throw new Error('Preprocessed data does not match the expected input size for the model.');
        }
        const aiResponse = await performInference(preprocessedData);
        res.json({ results: aiResponse });
    } catch (error) {
        console.error('Error during AI interaction:', error.message);
        res.status(500).json({ error: `Error during AI interaction: ${error.message}` });
    }
});

// Define the port number as 3001
const PORT = 3001;

// Start the server and load the model
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await loadModel();
    } catch (error) {
        console.error('Error loading the AI model:', error.message);
    }
});
