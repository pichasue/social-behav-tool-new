import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
  Heading,
} from '@chakra-ui/react';

const DataCollection = () => {
  const [formData, setFormData] = useState({
    behavior: '',
    context: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
