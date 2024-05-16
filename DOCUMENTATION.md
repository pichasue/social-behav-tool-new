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

### GitHub Pages
- The frontend can also be deployed to GitHub Pages. Ensure the `gh-pages` branch is up-to-date with the build directory containing the static files.
- The GitHub Pages site is configured to serve the site from the `gh-pages` branch.

### Deployment Process
- The frontend is built locally and deployed to AWS Amplify and GitHub Pages.
- The backend server is deployed separately and configured to communicate with the frontend.

## Credentials and Configuration
- AWS credentials are provided by the user and configured in the AWS CLI.
- GitHub token is required for GitHub Pages deployment and should be securely stored and configured.
- CORS settings are configured to allow communication between the frontend and backend.

## Future Development
- Data Visualization and Community Portal sections are in development to enhance user interaction and display AI-generated insights.

## Maintenance and Troubleshooting
- Regular updates and commits to the version control system are recommended to maintain the application's functionality.
- For troubleshooting, refer to the console logs and network activity in the browser's developer tools.
- Specific troubleshooting guides and contact details for the development team or project maintainer can be found in the project's wiki.

## Contact
- For further assistance or inquiries, please contact the development team or the project maintainer through the project's GitHub issues or the provided contact details in the project's wiki.