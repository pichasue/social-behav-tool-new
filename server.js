const express = require('express');
const cors = require('cors');
const theories = require('./mockData');
const { normalizeData, oneHotEncodeData, imputeMissingValues } = require('./data_preprocessing');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve mock dataset of theories
app.get('/api/theories', (req, res) => {
  res.json(theories);
});

// Endpoint for AI interactions with data preprocessing
app.post('/api/ai-interaction', (req, res) => {
  try {
    // Preprocess the data
    const normalizedData = normalizeData(req.body.data, req.body.min, req.body.max);
    const oneHotEncodedData = oneHotEncodeData(req.body.data, req.body.categories);
    const imputedData = imputeMissingValues(req.body.data);

    // TODO: Replace with actual AI model interaction logic using preprocessed data
    res.json({
      message: 'AI Interaction endpoint hit with preprocessed data',
      normalizedData: normalizedData,
      oneHotEncodedData: oneHotEncodedData,
      imputedData: imputedData
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
