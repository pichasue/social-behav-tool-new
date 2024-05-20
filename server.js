const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node'); // Import TensorFlow.js for Node.js
const cors = require('cors'); // Import CORS package
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

// Mock data for processed tweets
const processedTweets = [
  {
    id: 1,
    user: "User1",
    content: "Tweet content 1",
    datePosted: "2023-05-10T12:00:00Z",
    analysisResults: {
      sentiment: "Positive",
      relevance: "High"
    }
  },
  {
    id: 2,
    user: "User2",
    content: "Tweet content 2",
    datePosted: "2023-05-11T15:30:00Z",
    analysisResults: {
      sentiment: "Negative",
      relevance: "Medium"
    }
  },
  // Additional mock tweets can be added here
];

// AI model inference
async function performInference(inputs1, inputs, inputs2) {
    console.log('Performing inference with input tensors');
    // Retrieve the loaded model using the getModel function
    const model = getModel();
    // Check if the model is loaded before attempting to perform inference
    if (!model) {
        console.error('AI model is not loaded.');
        throw new Error('AI model is not loaded.');
    }
    // Perform inference using the executeAsync method
    const predictions = await model.executeAsync({
        inputs_1: tf.tensor2d(inputs1, [1, 128]),
        inputs: tf.tensor2d(inputs, [1, 128]),
        inputs_2: tf.tensor2d(inputs2, [1, 128])
    });
    // Check if predictions is an array of tensors
    if (Array.isArray(predictions)) {
        // Convert each tensor in the array to an array
        return predictions.map(tensor => tensor.arraySync());
    } else {
        // Convert tensor to array to send back to client
        return predictions.arraySync();
    }
}

// Define a GET endpoint for fetching theories
app.get('/api/theories', (req, res) => {
    res.json(theories);
});

// Define a GET endpoint for fetching processed tweets
app.get('/api/processed-tweets', (req, res) => {
    res.json(processedTweets);
});

// Define a POST endpoint for submitting data
app.post('/api/data', (req, res) => {
    console.log('Received data submission:', req.body);
    res.status(200).json({ message: 'Data received successfully.' });
});

// Define a POST endpoint for AI interaction
app.post('/api/ai-interaction', async (req, res) => {
    const { inputs_1, inputs, inputs_2 } = req.body;
    console.log('Received data for AI interaction:', req.body);

    // Validate the input tensors
    if (!inputs_1 || !inputs || !inputs_2) {
        return res.status(400).json({ error: "Invalid data format: Expected 'inputs_1', 'inputs', and 'inputs_2'." });
    }

    // Additional validation to ensure each input tensor is an array of arrays with the correct shape
    if (!Array.isArray(inputs_1) || !Array.isArray(inputs_1[0]) || inputs_1[0].length !== 128) {
        return res.status(400).json({ error: "Invalid data format for 'inputs_1': Expected an array of arrays with 128 elements each." });
    }
    if (!Array.isArray(inputs) || !Array.isArray(inputs[0]) || inputs[0].length !== 128) {
        return res.status(400).json({ error: "Invalid data format for 'inputs': Expected an array of arrays with 128 elements each." });
    }
    if (!Array.isArray(inputs_2) || !Array.isArray(inputs_2[0]) || inputs_2[0].length !== 128) {
        return res.status(400).json({ error: "Invalid data format for 'inputs_2': Expected an array of arrays with 128 elements each." });
    }

    try {
        const aiResponse = await performInference(inputs_1, inputs, inputs_2);
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
