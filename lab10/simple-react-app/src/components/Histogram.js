import React from 'react';
import styled from 'styled-components';
import HistogramBar from './HistogramBar';

const HistogramStyle = styled.div`
  background-color: #F8DFFF;
  padding: 1rem;
  border-radius: 12px;
  margin: 2rem auto;
`;

export default function Histogram ({monthData = [], monthlyExpenses = []} ) {
  const maxExpense = Math.max(...monthlyExpenses);

  return (
    <HistogramStyle style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
      {monthData.map((item, index) => {
        const filledHeight = maxExpense > 0 
          ? `${(monthlyExpenses[index] / maxExpense) * 150}px` 
          : '0px';
          
        return (
          <HistogramBar 
            key={item.month} 
            month={item.month} 
            filledHeight={filledHeight}
          />
        );
      })}
    </HistogramStyle>
  );
};

