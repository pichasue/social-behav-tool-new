import React, { useState, useEffect } from 'react';
import './Theories.css'; // Import the CSS file for styling

const Theories = () => {
  const [theories, setTheories] = useState([]);
  const [constructs, setConstructs] = useState([]);
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

  const handleTheoryChange = async (event) => {
    const selectedTheoryId = parseInt(event.target.value, 10); // Ensure the theory ID is an integer
    console.log('Selected theory ID:', selectedTheoryId); // Log selected theory ID

    // Fetch constructs associated with the selected theory
    try {
      const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/constructs?theory=${selectedTheoryId}`;
      console.log('Fetch URL:', fetchUrl); // Log the fetch URL
      const response = await fetch(fetchUrl);
      const data = await response.json();
      console.log('Fetched constructs:', data); // Log fetched constructs
      setConstructs(data);
    } catch (error) {
      console.error('Error fetching constructs:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading theories...</div>;
  }

  return (
    <div className="theories-container">
      <h2 className="theories-header">Theories</h2>
      <select className="theories-dropdown" onChange={handleTheoryChange}>
        <option value="">Select a theory</option>
        {theories.map((theory) => (
          <option key={theory.id} value={theory.id}>{theory.name}</option>
        ))}
      </select>
      <div className="constructs-container">
        {constructs.map((construct, index) => (
          <div key={index} className="construct-item">
            <h3>{construct.name}</h3>
            <p>{construct.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theories;
