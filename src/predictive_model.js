import * as tf from '@tensorflow/tfjs';

// A simple model for demonstration purposes
const model = tf.sequential();

// Add an input layer
model.add(tf.layers.dense({ units: 1, inputShape: [10] }));

// Add one hidden layer
model.add(tf.layers.dense({ units: 10, activation: 'relu' }));

// Add an output layer
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Compile the model with an optimizer and loss function for training
model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

export default model;
