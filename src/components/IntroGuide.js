import React from 'react';
import TheorySelection from './TheorySelection';

const IntroGuide = () => {
  return (
    <div>
      <h1>Welcome to the Social Behavior Change Modeling Guide</h1>
      <p>This interactive guide will assist you in selecting the most appropriate behavior change theory for your needs, modeling your data, and analyzing the results to inform your decision-making process.</p>
      <p>Let's get started by selecting a behavior change theory that aligns with the issue you are addressing.</p>
      <TheorySelection onTheorySelect={(theoryId) => console.log(`Selected theory ID: ${theoryId}`)} />
      {/* Placeholder for issue identification component */}
      {/* Placeholder for data modeling component */}
      {/* Placeholder for analysis tools component */}
      {/* Placeholder for result interpretation component */}
      {/* Placeholder for feedback loop component */}
    </div>
  );
};

export default IntroGuide;
