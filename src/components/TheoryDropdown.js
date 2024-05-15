import React from 'react';
import { Select } from '@chakra-ui/react';

const TheoryDropdown = ({ theories, onSelectTheory }) => {
  return (
    <Select placeholder="Select theory" onChange={onSelectTheory}>
      {theories.map((theory, index) => (
        <option key={index} value={theory.id}>
          {theory.name}
        </option>
      ))}
    </Select>
  );
};

export default TheoryDropdown;
