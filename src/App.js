import React from 'react';
import { ChakraProvider, Box, VStack, Link, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import HomePage from './HomePage';
import DataCollection from './DataCollection';
import AnalysisResults from './AnalysisResults';
import AIInsights from './AIInsights';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box p={4}>
          <VStack spacing={4} align='stretch'>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/data-collection">Data Collection</Link>
            <Link as={RouterLink} to="/analysis-results">Analysis Results</Link>
            <Link as={RouterLink} to="/ai-insights">AI Insights</Link>
          </VStack>
        </Box>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/data-collection" element={<DataCollection />} />
          <Route path="/analysis-results" element={<AnalysisResults />} />
          <Route path="/ai-insights" element={<AIInsights />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
