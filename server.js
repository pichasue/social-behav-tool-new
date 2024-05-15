const express = require('express');
const cors = require('cors');
const tf = require('@tensorflow/tfjs-node'); // Import TensorFlow.js
const theories = require('./mockData');
const { normalizeData, oneHotEncodeData, imputeMissingValues } = require('./data_preprocessing');
const model = require('./predictive_model'); // Import the AI model
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve mock dataset of theories
app.get('/api/theories', (req, res) => {
  res.json(theories);
});

// Endpoint for AI interactions with data preprocessing
app.post('/api/ai-interaction', async (req, res) => {
  try {
    // Validate request body
    if (!req.body.data || !Array.isArray(req.body.data)) {
      return res.status(400).json({ message: 'Invalid data format: data field must be an array.' });
    }
    if (typeof req.body.min !== 'number' || typeof req.body.max !== 'number') {
      return res.status(400).json({ message: 'Invalid data format: min and max fields must be numbers.' });
    }
    if (req.body.categories && !Array.isArray(req.body.categories)) {
      return res.status(400).json({ message: 'Invalid data format: categories field must be an array.' });
    }

    // Preprocess the data
    const normalizedData = normalizeData(req.body.data, req.body.min, req.body.max);
    const oneHotEncodedData = oneHotEncodeData(req.body.data, req.body.categories);
    const imputedData = imputeMissingValues(req.body.data);

    // Prepare data for prediction
    const inputData = tf.tensor2d([imputedData]); // Convert to 2D tensor

    // Make prediction using the AI model
    const prediction = await model.predict(inputData).data();

    // Respond with the prediction result
    res.json({
      message: 'AI Interaction endpoint hit with preprocessed data',
      normalizedData: normalizedData,
      oneHotEncodedData: oneHotEncodedData,
      imputedData: imputedData,
      prediction: prediction // Include the prediction in the response
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing data', error: error.message });
  }
});

// Endpoint for data collection form submissions
app.post('/api/data', (req, res) => {
  try {
    // Here you would handle the incoming form data, validate it, and perform necessary actions
    // For now, we'll just echo the data back to the client
    res.json({
      message: 'Data received successfully',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({ message: 'Error handling form data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
