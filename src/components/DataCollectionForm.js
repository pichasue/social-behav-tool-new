import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';

const DataCollectionForm = () => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => setInputData(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle the submission to the backend or another service
    console.log(inputData);
  };

  const isError = inputData === '';

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isInvalid={isError}>
          <FormLabel htmlFor='data-input'>Enter Data</FormLabel>
          <Input
            id='data-input'
            type='text'
            value={inputData}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>
              Enter the data you'd like to analyze.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Data is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
          isDisabled={isError}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default DataCollectionForm;
