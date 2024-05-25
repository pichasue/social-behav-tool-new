import React from 'react';
import { ChakraProvider, Box, HStack, Button, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import HomePage from './HomePage';
import DataCollection from './DataCollection';
import AnalysisResults from './AnalysisResults';
import AIInsights from './AIInsights';
import Theories from './components/Theories';

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
          <HStack spacing={4} align='center' justify='center'>
            <Button as={RouterLink} to="/" colorScheme="teal" variant="solid">Home</Button>
            <Button as={RouterLink} to="/data-collection" colorScheme="teal" variant="solid">Data Collection</Button>
            <Button as={RouterLink} to="/analysis-results" colorScheme="teal" variant="solid">Analysis Results</Button>
            <Button as={RouterLink} to="/ai-insights" colorScheme="teal" variant="solid">AI Insights</Button>
          </HStack>
        </Box>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/data-collection" element={<DataCollection />} />
          <Route path="/analysis-results" element={<AnalysisResults />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/theories" element={<Theories />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
