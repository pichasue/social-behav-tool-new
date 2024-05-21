# Social Behavior Measurement Tool

## Overview
This project is a web and mobile application designed to measure and analyze social behavior changes across various sectors. It features a React frontend using Chakra UI and includes AI functionalities like predictive analytics and NLP.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- PostgreSQL database

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/pichasue/social-behav-tool-new.git
   ```
2. Navigate to the project directory:
   ```
   cd social-behav-tool-new
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or if you are using yarn:
   ```
   yarn install
   ```

### Environment Setup
To set up your environment variables securely:
1. Copy the `.env.example` file to a new file named `.env` in the root of the project.
2. Replace the placeholder values in the `.env` file with your actual configuration details.
3. Ensure that the `.env` file is included in your `.gitignore` to prevent committing sensitive information to public repositories.

## Running the Application

### Starting the Backend Server
```
npm run server
```

### Starting the Frontend Development Server
```
npm start
```

### Running Tests
To ensure the application's features are working as expected, you can run the test suite with the following command:
```
npm test
```
This will execute all the tests defined in the `test` directory and provide a report on any tests that pass or fail.

## Deployment

### Building for Production
```
npm run build
```
This will create a `build` directory with the production build of the app.

### Deploying to Netlify
Ensure you have the Netlify CLI installed and you are logged in. Then run:
```
netlify deploy --prod
```
Follow the prompts to deploy the `build` directory to Netlify.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
