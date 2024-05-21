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

## 5. Environment Configuration
### Using the `.env.example` File
- The project includes a `.env.example` file which serves as a template for the necessary environment variables required for both development and production environments.
- To set up your environment variables, copy the `.env.example` file to a new file named `.env` in the root of the project directory.
- Replace the placeholder values in the `.env` file with your actual configuration details specific to your development and production setups.
- It is crucial to ensure that the `.env` file is included in your `.gitignore` file to prevent committing sensitive information to public repositories. This step is essential for maintaining the security of your deployment.

## 6. TensorFlow.js Model Integration
### Model Loading and Inference
- The AI model is loaded using the `loadModel` function in `predictive_model.js`. The model performs inference based on input data received from API requests.

### Integration with Server Endpoints
- The model is integrated with the `/api/ai-interaction` endpoint, which handles POST requests for AI model predictions.

## 7. API Endpoints and Interaction
### `/api/theories`
- This endpoint provides a mock dataset of social behavior change theories and constructs.

### `/api/ai-interaction`
- This endpoint accepts POST requests with input data for the AI model and returns predictions.

## 8. Deployment to Netlify
### Installing the Netlify CLI
- If you do not have the Netlify CLI installed, you can install it by running `npm install netlify-cli -g` in your terminal. This will install the CLI globally on your system, allowing you to access it from any directory.

### Deploying the Application
- To deploy the application to Netlify, first ensure that you have the Netlify CLI installed and that you are logged in to your Netlify account.
- Update the production build by running `npm run build`, which will create a `build` directory with the production-ready files.
- Before deploying, set the necessary environment variables on Netlify. This can be done through the Netlify UI under 'Site settings' > 'Build & deploy' > 'Environment', or via the CLI using the `netlify env:set KEY VALUE` command for each variable.
- Log into Netlify via the CLI using the `netlify login` command, which will open a browser window to authenticate your Netlify account.
- Deploy the application by running `netlify deploy --prod` from the root of the project directory, and follow the prompts to specify the `build` directory for deployment.
- After deployment, a unique site ID will be provided by Netlify. This ID is crucial for future updates and should be noted. To update the site, use the `netlify deploy --site YOUR_SITE_ID --auth YOUR_NETLIFY_AUTH_TOKEN --prod` command, replacing `YOUR_SITE_ID` with your actual site ID and `YOUR_NETLIFY_AUTH_TOKEN` with your Netlify authentication token.

## 9. Troubleshooting and FAQs
### Common Issues and Their Resolutions
- **Issue**: Model fails to load.
  **Resolution**: Ensure the `model.json` file and associated weights are correctly placed in the `web_model` directory and that the server has read permissions for these files.
- **Issue**: Server does not start.
  **Resolution**: Check for any syntax errors in `server.js`. Ensure all dependencies are installed with `npm install` and that the correct version of Node.js is being used.
- **Issue**: `/api/ai-interaction` endpoint returns an error.
  **Resolution**: Validate the JSON payload structure. Ensure that the input tensors match the model's expected input shape and data type.

### Contact Information for Further Assistance
- For further assistance, please reach out to the project maintainer at [social.behav.tool.support@example.com](mailto:social.behav.tool.support@example.com).

## 10. Contact and Support
### Reporting Issues or Contributing
- To report issues or contribute to the project, please visit the project's GitHub repository at [https://github.com/social-behav-tool/social-behav-tool](https://github.com/social-behav-tool/social-behav-tool) and open an issue or pull request.

### Acknowledgments and Contact Details
- We would like to thank all the contributors who have helped in developing this tool. For any inquiries or further information, please contact the project team at [social.behav.tool.team@example.com](mailto:social.behav.tool.team@example.com).

## 11. Model Training and Updating
### Training the Model
- To train the model, use the provided training scripts located in the `training` directory. Follow the instructions in the `TRAINING.md` file for setting up the training environment and executing the training process.

### Updating the Model
- After retraining, update the model in the application by replacing the `model.json` file and associated weights in the `web_model` directory. Restart the server to load the new model.
