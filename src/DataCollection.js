import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
  Heading,
  useToast,
  Select,
} from '@chakra-ui/react';

const DataCollection = () => {
  const [formData, setFormData] = useState({
    behavior: '',
    context: '',
    notes: '',
    theory: '',
  });
  const [theories, setTheories] = useState([]);
  const [constructs, setConstructs] = useState([]);
  const toast = useToast();

  useEffect(() => {
    // Fetching from the production backend server
    // Update to use environment variable for backend URL
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
    fetch(`${backendUrl}/api/theories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTheories(data);
      })
      .catch((error) => {
        toast({
          title: 'An error occurred.',
          description: "Unable to fetch theories data.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        console.error('There was an error fetching the theories data:', error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'theory') {
      const selectedTheoryId = parseInt(value, 10);
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
      try {
        const fetchUrl = `${backendUrl}/api/constructs?theory=${selectedTheoryId}`;
        console.log('Fetch URL:', fetchUrl); // Log the fetch URL
        const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('Fetched constructs:', data); // Log the fetched constructs
        setConstructs(data);
      } catch (error) {
        console.error('Error fetching constructs:', error);
        toast({
          title: 'An error occurred.',
          description: "Unable to fetch constructs data.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to the server or another service
    console.log(formData);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5}>
        Data Collection Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="behavior">Behavior</FormLabel>
            <Input
              id="behavior"
              name="behavior"
              value={formData.behavior}
              onChange={handleChange}
              placeholder="Describe the behavior"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="context">Context</FormLabel>
            <Input
              id="context"
              name="context"
              value={formData.context}
              onChange={handleChange}
              placeholder="Describe the context"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="theory">Theory</FormLabel>
            <Select
              id="theory"
              name="theory"
              value={formData.theory}
              onChange={handleChange}
              placeholder="Select a theory"
            >
              {theories.map((theory) => (
                <option key={theory.id} value={theory.id}>
                  {theory.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="notes">Additional Notes</FormLabel>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional information"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="constructs">Constructs</FormLabel>
            <Select
              id="constructs"
              name="constructs"
              placeholder="Select a construct"
            >
              {constructs.map((construct) => (
                <option key={construct.id} value={construct.id}>
                  {construct.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit Data
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default DataCollection;
