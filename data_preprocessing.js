const tf = require('@tensorflow/tfjs-node');

// Function to normalize numerical data to a standard range 0-1
const normalizeData = (data, min, max) => {
  return data.map(value => (value - min) / (max - min));
};

// Function to encode categorical variables using one-hot encoding
const oneHotEncodeData = (data, categories) => {
  return data.map(value => {
    const encoded = new Array(categories.length).fill(0);
    const index = categories.indexOf(value);
    if (index !== -1) {
      encoded[index] = 1;
    }
    return encoded;
  });
};

// Function to handle missing values by imputation (mean value)
const imputeMissingValues = (data, strategy = 'mean') => {
  const validData = data.filter(value => value !== null && value !== undefined);
  const sum = validData.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / validData.length;

  return data.map(value => value !== null && value !== undefined ? value : mean);
};

module.exports = {
  normalizeData,
  oneHotEncodeData,
  imputeMissingValues
};
