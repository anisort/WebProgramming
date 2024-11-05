import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 1rem;
`;

const FilterLabel = styled.h5`
  color: white;
`;

const SelectStyle = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

export default function ExpenseFilter ( {selectedYear, onChangeYear} ) {
  const years = [2024, 2023, 2022];

  return (
    <FilterContainer>
      <FilterLabel>Filter by year</FilterLabel>
      <SelectStyle value={selectedYear} onChange={(e) => onChangeYear(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </SelectStyle>
    </FilterContainer>
  );
};