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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
