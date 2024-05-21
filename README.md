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
Create a `.env` file in the root of the project with the following structure:
```
REACT_APP_BACKEND_URL=<backend_url>
DB_HOST=<database_host>
DB_PORT=<database_port>
DB_NAME=<database_name>
DB_USER=<database_user>
DB_PASS=<database_password>
DATABASE_URL=<full_database_url>
```
Replace `<backend_url>`, `<database_host>`, `<database_port>`, `<database_name>`, `<database_user>`, `<database_password>`, and `<full_database_url>` with your actual database and backend server details.

## Running the Application

### Starting the Backend Server
```
npm run server
```

### Starting the Frontend Development Server
```
npm start
```

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
