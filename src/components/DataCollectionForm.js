import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';

const DataCollectionForm = ({ selectedTheory }) => {
  const [formData, setFormData] = useState({});
  const [theories, setTheories] = useState([]);
  const [error, setError] = useState({});
  const toast = useToast();

  useEffect(() => {
    // Fetch theories from the backend
    const fetchTheories = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/theories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTheories(data);
      } catch (error) {
        console.error("Could not fetch theories: ", error);
      }
    };

    fetchTheories();
  }, []); // Removed selectedTheory from dependency array to prevent re-fetching

  // Debugging: Log the theories fetched and the selected theory's constructs
  useEffect(() => {
    console.log('Theories fetched:', theories);
    const currentTheory = theories.find(theory => theory.id.toString() === selectedTheory);
    console.log('Selected theory constructs:', currentTheory?.constructs);
  }, [theories, selectedTheory]);

  const handleInputChange = (e, constructName) => {
    setFormData({ ...formData, [constructName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic here
    const newError = {};
    const currentTheory = theories.find(theory => theory.id.toString() === selectedTheory);
    currentTheory?.constructs.forEach(construct => {
      const constructName = construct.name;
      const constructValue = formData[constructName];
      if (!constructValue) {
        newError[constructName] = 'This field is required';
      }
      // Add more validation based on the construct's expected data type
      else if (construct.type === 'number' && isNaN(constructValue)) {
        newError[constructName] = 'This field must be a number';
      }
      // Add other validation checks as necessary
    });
    setError(newError);

    if (Object.keys(newError).length === 0) {
      // Handle the submission to the backend
      const submitData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Provide user feedback upon successful submission
          toast({
            title: "Data submitted.",
            description: "Your data has been successfully submitted.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          console.error("Could not submit data: ", error);
          // Provide user feedback upon submission failure
          toast({
            title: "Submission error.",
            description: "There was an error submitting your data.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      };

      submitData();
    }
  };

  const selectedTheoryConstructs = theories.find(theory => theory.id.toString() === selectedTheory)?.constructs || [];

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {selectedTheoryConstructs.map(construct => (
          <FormControl key={construct.name} isInvalid={error[construct.name]}>
            <FormLabel htmlFor={`input-${construct.name}`}>{construct.name}</FormLabel>
            <Input
              id={`input-${construct.name}`}
              type={construct.type === 'number' ? 'number' : 'text'}
              value={formData[construct.name] || ''}
              onChange={(e) => handleInputChange(e, construct.name)}
            />
            {!error[construct.name] ? (
              <FormHelperText>
                Enter the {construct.name ? construct.name.toLowerCase() : 'specified'} data.
              </FormHelperText>
            ) : (
              <FormErrorMessage>{error[construct.name]}</FormErrorMessage>
            )}
          </FormControl>
        ))}
        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
          isDisabled={Object.keys(error).length > 0}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default DataCollectionForm;
