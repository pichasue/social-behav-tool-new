import React, { useState, useEffect } from 'react';
import './Theories.css'; // Import the CSS file for styling

const Theories = () => {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch theories from the backend API
    const fetchTheoriesData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/theories`);
        const data = await response.json();
        console.log('Fetched theories:', data); // Log fetched data
        setTheories(data);
      } catch (error) {
        console.error('Error fetching theories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTheoriesData();
  }, []);

  if (loading) {
    return <div className="loading">Loading theories...</div>;
  }

  return (
    <div className="theories-container">
      <h2 className="theories-header">Theories</h2>
      <select className="theories-dropdown">
        {theories.map((theory, index) => (
          <option key={index} value={theory.name}>{theory.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Theories;
