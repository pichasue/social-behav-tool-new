import React, { useState, useEffect } from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import TheoriesGraph from './components/TheoriesGraph';

// HomePage component that displays the main interface and allows users to select a theory to explore its constructs
const HomePage = () => {
  const [theories, setTheories] = useState([]); // State to store the list of theories
  const [selectedTheory, setSelectedTheory] = useState(''); // State to store the currently selected theory
  const [constructs, setConstructs] = useState([]); // State to store the constructs of the selected theory

  useEffect(() => {
    // Fetch the list of theories from the backend when the component mounts
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/theories`)
      .then(response => response.json())
      .then(data => setTheories(data))
      .catch(error => console.error('Error fetching theories:', error));
  }, []);

  useEffect(() => {
    // Fetch the constructs for the selected theory when it changes
    if (selectedTheory) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/theories/${selectedTheory}/constructs`)
        .then(response => response.json())
        .then(data => setConstructs(data))
        .catch(error => console.error('Error fetching constructs:', error));
    }
  }, [selectedTheory]);

  const handleTheoryChange = (event) => {
    setSelectedTheory(event.target.value); // Update the selected theory based on user selection
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
        {/* Dropdown to select a theory and trigger the display of its constructs */}
        <Select placeholder="Select a theory" onChange={handleTheoryChange} value={selectedTheory}>
          {theories.map((theory) => (
            <option key={theory.id} value={theory.id}>{theory.name}</option>
          ))}
        </Select>
      </Box>
      {selectedTheory && (
        <>
          <Box my={4}>
            <Text fontSize="lg" fontWeight="semibold">Constructs:</Text>
            {/* List the constructs associated with the selected theory */}
            <ul>
              {constructs.map(construct => (
                <li key={construct.id}>{construct.name}</li>
              ))}
            </ul>
          </Box>
          {/* Render the TheoriesGraph component with the constructs data */}
          <TheoriesGraph data={constructs.map(construct => ({ theory: construct.name, value: construct.value }))} />
        </>
      )}
    </Box>
  );
};

export default HomePage;
