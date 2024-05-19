import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

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
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h4" size="md">Behavior Analysis</Heading>
          <Text mt={2}>{resultsData.behaviorAnalysis}</Text>
        </Box>
        <Box>
          <Heading as="h4" size="md">Context Analysis</Heading>
          <Text mt={2}>{resultsData.contextAnalysis}</Text>
        </Box>
        <Box>
          <Heading as="h4" size="md">Additional Notes</Heading>
          <Text mt={2}>{resultsData.additionalNotes}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AnalysisResults;
