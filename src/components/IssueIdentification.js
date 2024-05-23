import React, { useState } from 'react';

const IssueIdentification = ({ onIssueIdentified }) => {
  const [issue, setIssue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onIssueIdentified(issue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueInput">Describe the issue you are addressing:</label>
      <textarea
        id="issueInput"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        placeholder="Enter a brief description of the issue..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IssueIdentification;
