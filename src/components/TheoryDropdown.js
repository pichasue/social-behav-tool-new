import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';

const TheoryDropdown = ({ onSelectTheory }) => {
  const [theories, setTheories] = useState([]);

  useEffect(() => {
    const fetchTheories = async () => {
      try {
        // Updated to include the backend server's port number
        const response = await fetch('http://localhost:3001/api/theories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTheories(data);
      } catch (error) {
        console.error("Could not fetch theories: ", error);
      }
    };

    fetchTheories();
  }, []);

  return (
    <Select placeholder="Select theory" onChange={onSelectTheory}>
      {theories.map((theory) => (
        <option key={theory.id} value={theory.id}>
          {theory.name}
        </option>
      ))}
    </Select>
  );
};

export default TheoryDropdown;
