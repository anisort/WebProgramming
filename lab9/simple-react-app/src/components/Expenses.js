import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Histogram from './Histogram';
import styled from 'styled-components';
import Card from './Card';

const ExpenseStyle = styled(Card)`
  padding: 1rem;
  background-color: #1F1F1F;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const monthlyExpenses = Array(12).fill(0);
  
  filteredExpenses.forEach((expense) => {
    const monthIndex = expense.date.getMonth();
    monthlyExpenses[monthIndex] += expense.amount;
  });

  return (
    <ExpenseStyle>
      <ExpenseFilter selectedYear={filteredYear} onChangeYear={filterChangeHandler} />
      <Histogram monthData={props.monthData} monthlyExpenses={monthlyExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ExpenseStyle>
  );
}
