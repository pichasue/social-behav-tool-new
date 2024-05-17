const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

// Load the actual trained TensorFlow.js model from the file system
// The path is assumed to be where the trained model is saved
const modelPath = '/home/ubuntu/social-behav-tool-new/model/';
let model;

async function loadModel() {
  try {
    // Check if the model directory exists before attempting to load it
    await fs.access(modelPath);
    // Load the Universal Sentence Encoder model
    model = await tf.loadGraphModel(`file://${modelPath}saved_model.pb`);
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
