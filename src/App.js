import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import TheoryDropdown from './components/TheoryDropdown';
import DataCollectionForm from './components/DataCollectionForm';
import VisualizationComponent from './components/VisualizationComponent';

function App() {
  const [selectedTheory, setSelectedTheory] = useState(null);

  // Simulate theory selection for testing
  useEffect(() => {
    // Simulate selecting the first theory after fetching theories
    // This is for testing purposes only and should be removed later
    setSelectedTheory('1');
  }, []);

  const handleSelectTheory = (event) => {
    setSelectedTheory(event.target.value);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Box>
              <TheoryDropdown onSelectTheory={handleSelectTheory} />
            </Box>
            <Box>
              <DataCollectionForm selectedTheory={selectedTheory} />
            </Box>
            <Box>
              <VisualizationComponent />
            </Box>
            {/* Placeholder for Community Portal Section */}
            <Box>
              <p>Community Portal Section will go here</p>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
