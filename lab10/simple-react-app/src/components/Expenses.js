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

export default function Expenses({ items, monthData, setExpenses }) {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) =>
    expense.date.getFullYear().toString() === filteredYear
  );

  const monthlyExpenses = Array(12).fill(0);
  filteredExpenses.forEach((expense) => {
    const monthIndex = expense.date.getMonth();
    monthlyExpenses[monthIndex] += expense.amount;
  });

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const handleUpdateExpense = (id, updatedTitle, updatedAmount, updatedDate) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? { ...expense, title: updatedTitle, amount: updatedAmount, date: updatedDate }
          : expense
      )
    );
  };

  return (
    <ExpenseStyle>
      <ExpenseFilter selectedYear={filteredYear} onChangeYear={filterChangeHandler} />
      <Histogram monthData={monthData} monthlyExpenses={monthlyExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={handleDeleteExpense}
          onUpdate={handleUpdateExpense}
        />
      ))}
    </ExpenseStyle>
  );
}