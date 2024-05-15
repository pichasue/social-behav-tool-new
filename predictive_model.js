const tf = require('@tensorflow/tfjs-node');

// Define a sequential model
const model = tf.sequential();

// Add an input layer
model.add(tf.layers.dense({ units: 10, inputShape: [10], activation: 'relu' }));

// Add one hidden layer
model.add(tf.layers.dense({ units: 16, activation: 'relu' }));

// Add an output layer
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Compile the model with an optimizer, loss function, and metrics
model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

// Export the model
module.exports = model;
