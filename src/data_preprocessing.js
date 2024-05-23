// data_preprocessing.js
// This file contains functions to preprocess data for the TensorFlow.js model

/**
 * Normalizes the input data to be in a consistent format for the model.
 * @param {Object} data - The input data to be preprocessed.
 * @returns {Array} - The normalized data as an array.
 */
function preprocessData(data) {
  // Normalize the data here. This function scales numerical values based on the model's expected input range.
  // Assuming 'data' is an array of objects with 'value', 'min', and 'max' properties
  const normalizedData = data.map(item => {
    // Check if 'value', 'min', and 'max' properties exist and are numbers
    if (typeof item.value !== 'number' || typeof item.min !== 'number' || typeof item.max !== 'number') {
      throw new Error('Data object is missing required numeric properties: value, min, and max');
    }
    // Normalization logic: scale 'value' to be between 0 and 1 based on 'min' and 'max'
    const scaledValue = (item.value - item.min) / (item.max - item.min);
    // Ensure the scaled value is within the 0-1 range
    return Math.min(Math.max(scaledValue, 0), 1);
  });

  // Pad the array with zeros if necessary to ensure it has 10 elements
  while (normalizedData.length < 10) {
    normalizedData.push(0);
  }

  // Ensure the array does not exceed 10 elements
  if (normalizedData.length > 10) {
    throw new Error('Normalized data exceeds the expected input size of 10 elements');
  }

  return normalizedData;
}

module.exports = { preprocessData };
