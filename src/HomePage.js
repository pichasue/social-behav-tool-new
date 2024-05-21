import React, { useState, useEffect } from 'react';
import { Box, Text, Select } from '@chakra-ui/react';

const HomePage = () => {
  const [theories, setTheories] = useState([]);
  const [selectedTheory, setSelectedTheory] = useState('');

  useEffect(() => {
    // Fetch the list of theories from the backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/theories`)
      .then(response => response.json())
      .then(data => setTheories(data))
      .catch(error => console.error('Error fetching theories:', error));
  }, []);

  const handleTheoryChange = (event) => {
    setSelectedTheory(event.target.value);
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to the Social Behavior Measurement Tool
      </Text>
      <Text mt={4}>
        This tool is designed to help measure and analyze social behavior changes across various sectors.
        Navigate through the application to collect data, view analysis results, and gain AI-driven insights.
      </Text>
      <Box my={4}>
        <Select placeholder="Select a theory" onChange={handleTheoryChange} value={selectedTheory}>
          {theories.map((theory) => (
            <option key={theory.name} value={theory.name}>{theory.name}</option>
          ))}
        </Select>
      </Box>
      {selectedTheory && (
        <Box my={4}>
          <Text fontSize="lg" fontWeight="semibold">Constructs:</Text>
          <ul>
            {theories.find(theory => theory.name === selectedTheory)?.constructs.map(construct => (
              <li key={construct}>{construct}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
