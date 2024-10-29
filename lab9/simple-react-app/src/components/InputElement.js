import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 300px;
`;

const LabelStyle = styled.h5`
  margin-bottom: 0.5rem;
  color: black;
`;

export default function InputElement({ label, type, value, onChange }) {
  return (
    <InputContainer>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
}
