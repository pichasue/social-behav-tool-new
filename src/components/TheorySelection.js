import React, { useState, useEffect } from 'react';

const TheorySelection = ({ onTheorySelect }) => {
  const [theories, setTheories] = useState([]);
  const [selectedTheory, setSelectedTheory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTheories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/theories');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setTheories(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchTheories();
  }, []);

  const handleTheoryChange = (event) => {
    setSelectedTheory(event.target.value);
    onTheorySelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="theory-select">Select a Theory:</label>
      <select id="theory-select" value={selectedTheory} onChange={handleTheoryChange} disabled={isLoading}>
        <option value="">--Please choose an option--</option>
        {theories.map((theory) => (
          <option key={theory.id} value={theory.id}>
            {theory.name}
          </option>
        ))}
      </select>
      {isLoading && <p>Loading theories...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TheorySelection;
