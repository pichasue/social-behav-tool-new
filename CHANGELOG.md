# Changelog

## [Unreleased]

### Added
- Integrated the `Theories` component into the main application.
- Added a dropdown menu to select theories.
- Added constructs rendering logic to display constructs associated with the selected theory.
- Added sample constructs for "Theory of Planned Behavior" and "Social Cognitive Theory" to the database.

### Changed
- Updated the SQL query in the `server.js` file to reference the correct column name "theory_id" instead of "theory."
- Updated the frontend to pass the correct `theory_id` to the backend when making the request to the `/api/constructs` endpoint.
- Corrected the fetch request URL in the frontend to ensure it correctly points to the backend server's `/api/theories` endpoint.
- Fixed the constructs rendering logic in the `HomePage.js` file to map constructs to individual React elements.

### Fixed
- Resolved the connection timeout error when fetching theories from the backend API.
- Corrected the PostgreSQL connection command to connect to the remote AWS RDS instance.
- Verified and resolved the error in the `/api/theories` endpoint.
- Investigated and fixed the "Cannot read properties of undefined (reading 'map')" error in the HomePage component.
- Investigated and fixed the "constructs.map is not a function" error in the HomePage component.
- Corrected the `theory` query parameter to ensure it is passed as a valid number.
- Verified and resolved the database connection timeout issue in the backend server.

### Deployment
- Deployed the frontend application to Netlify.
- Linked the project directory to the correct Netlify site.
- Deployed the application to GitHub and GitHub Pages using the new token.
- Provided the packaged files to Susan for manual deployment.

### Environment
- Set the correct AWS credentials using the provided environment variables.
- Verified the network connectivity to the remote AWS RDS instance.
- Created the "sbc_tool_database" database on the RDS instance.
- Verified the database connection string and ensured the PostgreSQL server is accessible.
- Ensured that the 'constructs' table exists in the PostgreSQL database and has the appropriate schema.
