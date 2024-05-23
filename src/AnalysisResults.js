import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

// AnalysisResults component displays the results of the behavior analysis
const AnalysisResults = () => {
  // Placeholder data for the analysis results
  const resultsData = {
    behaviorAnalysis: 'The behavior shows a positive trend towards change.',
    contextAnalysis: 'The context is conducive for the intended behavior change.',
    additionalNotes: 'Further investigation is needed in some areas.',
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5}>
        Analysis Results
      </Heading>
      {/* VStack layout component to vertically stack the result sections */}
      <VStack spacing={4} align="stretch">
        {/* Box component to contain each result section */}
        <Box>
          <Heading as="h4" size="md">Behavior Analysis</Heading>
          {/* Text component to display the behavior analysis result */}
          <Text mt={2}>{resultsData.behaviorAnalysis}</Text>
        </Box>
        <Box>
          <Heading as="h4" size="md">Context Analysis</Heading>
          {/* Text component to display the context analysis result */}
          <Text mt={2}>{resultsData.contextAnalysis}</Text>
        </Box>
        <Box>
          <Heading as="h4" size="md">Additional Notes</Heading>
          {/* Text component to display any additional notes from the analysis */}
          <Text mt={2}>{resultsData.additionalNotes}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AnalysisResults;
