import React, { useState, useEffect } from 'react';
import { fetchTheories } from '../mockApi';
import './Theories.css'; // Import the CSS file for styling

const Theories = () => {
  const [theories, setTheories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch theories from the mock API
    const fetchTheoriesData = async () => {
      try {
        const data = await fetchTheories();
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
      <ul className="theories-list">
        {theories.map((theory, index) => (
          <li key={index} className="theory-item">{theory.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Theories;
