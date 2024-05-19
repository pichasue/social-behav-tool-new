# Social Behavior Measurement Tool Documentation

## 1. Introduction to the Social Behavior Measurement Tool
The Social Behavior Measurement Tool is designed to assist researchers and practitioners in the field of social behavior change. It provides a platform for collecting and analyzing data related to various social behavior theories and constructs. This tool is adaptable for multiple sectors including health, agriculture, and community development.

## 2. Architecture Overview
The tool consists of a React frontend utilizing Chakra UI for a responsive and accessible user interface. The backend is powered by Node.js with Express, providing a robust server capable of handling API requests. AI functionalities are integrated using TensorFlow.js, enabling predictive analytics and natural language processing capabilities.

## 3. Frontend Setup and Usage
### Installation of Dependencies
- Ensure Node.js and npm are installed on your system.
- Navigate to the frontend directory and run `npm install` to install all required dependencies.

### Running the Development Server
- Execute `npm start` to start the development server. The application will be available at `http://localhost:3000`.

### Building for Production
- Run `npm run build` to create a production build of the application.

### Navigating the User Interface
- The UI is intuitive and provides easy navigation through various components related to social behavior change theories and constructs.

## 4. Backend Setup and Usage
### Server Configuration
- The server configuration can be found in the `server.js` file, which includes the setup of API endpoints and model loading.

### Starting the Server
- To start the server, run `node server.js` from the backend directory. The server will listen on port 3001.

### Backend Structure and Key Files
- Key backend files include `server.js` for server configuration, `predictive_model.js` for AI model integration, and `data_preprocessing.js` for data preprocessing functions.

## 5. TensorFlow.js Model Integration
### Model Loading and Inference
- The AI model is loaded using the `loadModel` function in `predictive_model.js`. The model performs inference based on input data received from API requests.

### Integration with Server Endpoints
- The model is integrated with the `/api/ai-interaction` endpoint, which handles POST requests for AI model predictions.

## 6. API Endpoints and Interaction
### `/api/theories`
- This endpoint provides a mock dataset of social behavior change theories and constructs.

### `/api/ai-interaction`
- This endpoint accepts POST requests with input data for the AI model and returns predictions.

## 7. Troubleshooting and FAQs
### Common Issues and Their Resolutions
- **Issue**: Model fails to load.
  **Resolution**: Ensure the `model.json` file and associated weights are correctly placed in the `web_model` directory and that the server has read permissions for these files.
- **Issue**: Server does not start.
  **Resolution**: Check for any syntax errors in `server.js`. Ensure all dependencies are installed with `npm install` and that the correct version of Node.js is being used.
- **Issue**: `/api/ai-interaction` endpoint returns an error.
  **Resolution**: Validate the JSON payload structure. Ensure that the input tensors match the model's expected input shape and data type.

### Contact Information for Further Assistance
- For further assistance, please reach out to the project maintainer at [social.behav.tool.support@example.com](mailto:social.behav.tool.support@example.com).

## 8. Contact and Support
### Reporting Issues or Contributing
- To report issues or contribute to the project, please visit the project's GitHub repository at [https://github.com/social-behav-tool/social-behav-tool](https://github.com/social-behav-tool/social-behav-tool) and open an issue or pull request.

### Acknowledgments and Contact Details
- We would like to thank all the contributors who have helped in developing this tool. For any inquiries or further information, please contact the project team at [social.behav.tool.team@example.com](mailto:social.behav.tool.team@example.com).

## 9. Model Training and Updating
### Training the Model
- To train the model, use the provided training scripts located in the `training` directory. Follow the instructions in the `TRAINING.md` file for setting up the training environment and executing the training process.

### Updating the Model
- After retraining, update the model in the application by replacing the `model.json` file and associated weights in the `web_model` directory. Restart the server to load the new model.
