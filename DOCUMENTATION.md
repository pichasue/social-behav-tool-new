# Social Behavior Measurement Tool Documentation

## Overview
This document outlines the structure and functionality of the Social Behavior Measurement Tool, a web and mobile application designed to facilitate the collection and analysis of data within the context of various social behavior change theories.

## Frontend

### Technologies
- React.js
- Chakra UI for component styling

### Components
- `App.js`: Root component that manages the state for the selected theory and integrates other components.
- `TheoryDropdown.js`: Allows users to select a social behavior change theory.
- `DataCollectionForm.js`: Renders dynamic form fields based on the selected theory's constructs and handles data validation and submission.
- `VisualizationComponent.js`: Placeholder for future development to display AI insights in a visual format.

### State Management
- React state hooks are used to manage the application state, including the selected theory and form data.

## Backend

### Technologies
- Node.js
- Express.js

### Server Setup
- `server.js`: Main server file that sets up JSON parsing middleware, CORS settings, and API endpoints.

### API Endpoints
- `/api/theories`: Serves the mock dataset of social behavior change theories and constructs.
- `/api/data`: Handles form submissions and processes the data.
- `/api/ai-interaction`: Integrates TensorFlow.js for AI functionalities like predictive analytics and NLP.

## AI Functionalities
- `predictive_model.js`: Contains the AI model architecture.
- `data_preprocessing.js`: Contains functions for data preprocessing, such as normalization and one-hot encoding.

## Deployment

### AWS Amplify
- The application is deployed using AWS Amplify with the default region set to `us-east-1`.
- The Amplify appId is `d3lx4kfywxoa3p` and is accessible at `d3lx4kfywxoa3p.amplifyapp.com`.

### Deployment Process
- The frontend is built locally and deployed to AWS Amplify.
- The backend server is deployed separately and configured to communicate with the frontend.

## Credentials and Configuration
- AWS credentials are provided by the user and configured in the AWS CLI.
- CORS settings are configured to allow communication between the frontend and backend.

## Future Development
- Data Visualization and Community Portal sections are planned for future implementation to enhance user interaction and display AI-generated insights.

## Maintenance and Troubleshooting
- Regular updates and commits to the version control system are recommended to maintain the application's functionality.
- For troubleshooting, refer to the console logs and network activity in the browser's developer tools.

## Contact
- For further assistance or inquiries, please contact the development team or the project maintainer.
