import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #40005D;
  cursor: pointer;

  &:hover {
    background-color: #660094;
  }
`;

export default function Button ({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

