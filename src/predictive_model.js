const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

// Load the actual trained TensorFlow.js model from the file system
// The path is assumed to be where the trained model is saved
const modelPath = '/home/ubuntu/social-behav-tool-new/model/web_model/model.json';
let model;

async function loadModel() {
  console.log('Attempting to load the model...');
  try {
    // Check if the model directory exists before attempting to load it
    await fs.access(modelPath);
    console.log('Model directory exists, proceeding to load the model...');
    // Load the TensorFlow.js model
    model = await tf.loadGraphModel(`file://${modelPath}`);
    console.log('Model loaded successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Model directory not found:', modelPath);
    } else {
      console.error('Error loading the model:', error);
    }
  }
}

// Call loadModel to load the model when this module is required
loadModel();

module.exports = {
  getModel: () => model,
  loadModel // Export loadModel to allow manual reloading if necessary
};
