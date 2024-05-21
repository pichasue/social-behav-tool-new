import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AIInsights = () => {
  // Placeholder data for AI insights
  const insightsData = {
    prediction: 'Based on the data, there is a high likelihood of positive behavior change.',
    confidence: 'The AI model is 85% confident in this prediction.',
    recommendations: 'Recommendations for further actions to strengthen the behavior change will be listed here.',
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5}>
        AI Insights
      </Heading>
      <Text fontSize="xl" mb={3}>
        {insightsData.prediction}
      </Text>
      <Text mb={3}>
        Confidence: {insightsData.confidence}
      </Text>
      <Text>
        {insightsData.recommendations}
      </Text>
    </Box>
  );
};

export default AIInsights;
