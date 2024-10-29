import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  margin: 0 8px;
`;

const Bar = styled.div`
  height: 150px;
  width: 15px;
  background-color: #C3B4F3;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
`;

const FilledBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4826B9;
`;

const MonthLabel = styled.h5`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
`;

export default function HistogramBar({ month, filledHeight }) {
  return (
    <BarContainer>
      <Bar>
        <FilledBar style={{ height: filledHeight }} />
      </Bar>
      <MonthLabel>{month}</MonthLabel>
    </BarContainer>
  );
}
