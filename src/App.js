import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import TheoryDropdown from './components/TheoryDropdown';
import DataCollectionForm from './components/DataCollectionForm';
import VisualizationComponent from './components/VisualizationComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Box>
              <TheoryDropdown />
            </Box>
            <Box>
              <DataCollectionForm />
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
