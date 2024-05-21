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

// DataCollection component for users to input and submit data related to social behavior change
const DataCollection = () => {
  const [formData, setFormData] = useState({
    behavior: '',
    context: '',
    notes: '',
    theory: '',
  });
  const [theories, setTheories] = useState([]); // State to store the list of theories
  const toast = useToast();

  useEffect(() => {
    // Fetch the list of theories from the backend when the component mounts
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
    fetch(`${backendUrl}/api/theories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTheories(data); // Update state with the fetched theories data
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Update form data for the given field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend or another service
    console.log(formData); // Logging the form data to the console (for demonstration purposes)
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
                <option key={theory.id} value={theory.name}>
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
          <Button type="submit" colorScheme="blue">
            Submit Data
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default DataCollection;
