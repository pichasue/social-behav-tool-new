# Model Training and Updating Guide

## Introduction
This guide provides instructions for training the AI model used in the Social Behavior Measurement Tool and updating it within the application.

## Setting Up the Training Environment
Before training the model, ensure you have the following prerequisites installed:
- Python 3.8 or higher
- TensorFlow 2.x
- Any other libraries specified in the `requirements.txt` file within the `training` directory.

To set up the training environment:
1. Navigate to the `training` directory.
2. Install the required libraries using the command: `pip install -r requirements.txt`.
3. Prepare your dataset according to the model's input requirements.

## Running the Training Process
To train the model:
1. Run the training script with the command: `python train_model.py`.
2. Monitor the training progress through the console output. Checkpoints and logs will be saved in the specified directories.

## Updating the Model in the Application
After training, update the model in the application by following these steps:
1. Replace the `model.json` file and associated weight files in the `web_model` directory with the new ones generated after training.
2. Restart the server to load the new model by running `node server.js` in the backend directory.

## Troubleshooting Training Issues
If you encounter issues during training, consider the following:
- Verify the dataset is correctly formatted and accessible.
- Check the console output for error messages that can provide insights into the issue.
- Ensure all dependencies are at the correct version as specified in `requirements.txt`.

## Contact for Further Assistance
For further assistance with model training, please contact the project maintainer at social.behav.tool.support@example.com.
