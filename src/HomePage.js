import React, { useState, useEffect } from 'react';
import { Box, Text, Select } from '@chakra-ui/react';

const HomePage = () => {
  const [theories, setTheories] = useState([]);
  const [selectedTheory, setSelectedTheory] = useState('');
  const [constructs, setConstructs] = useState([]);

  useEffect(() => {
    // Log the backend URL to ensure it is set correctly
    console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);

    // Fetch the list of theories from the backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/theories`)
      .then(response => response.json())
      .then(data => setTheories(data))
      .catch(error => console.error('Error fetching theories:', error));
  }, []);

  const handleTheoryChange = async (event) => {
    setSelectedTheory(event.target.value);
    const selectedTheoryId = parseInt(event.target.value, 10);

    // Ensure the selectedTheoryId is a valid number before making the fetch call
    if (isNaN(selectedTheoryId)) {
      console.error('Error: Selected theory ID is not a valid number');
      return;
    }

    // Fetch constructs associated with the selected theory
    try {
      const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/constructs?theory=${selectedTheoryId}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      // Ensure the data is an array before setting it to constructs
      if (Array.isArray(data)) {
        setConstructs(data);
      } else {
        setConstructs([]);
        console.error('Error: Constructs data is not an array');
      }
    } catch (error) {
      console.error('Error fetching constructs:', error);
    }
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
            <option key={theory.id} value={theory.id}>{theory.name}</option>
          ))}
        </Select>
      </Box>
      {selectedTheory && (
        <Box my={4}>
          <Text fontSize="lg" fontWeight="semibold">Constructs:</Text>
          <ul>
            {constructs.map(construct => (
              <li key={construct.id}>{construct.name}: {construct.description}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
