import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpenseForm from './components/NewExpenseForm';
import './scss/styles.scss';
import styled from 'styled-components';

const AppStyle = styled.div`
  min-height: 100vh;
  background-color: #3F3F3F;
  font-family: 'Noto Sans JP', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2024, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2024, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 5, 12) },
];

const monthData = [
  { month: 'Jan' },
  { month: 'Feb' },
  { month: 'Mar' },
  { month: 'Apr' },
  { month: 'May' },
  { month: 'Jun' },
  { month: 'Jul' },
  { month: 'Aug' },
  { month: 'Sep' },
  { month: 'Oct' },
  { month: 'Nov' },
  { month: 'Dec' },
];

export default function App() {
  const [changedExpenses, setExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <AppStyle>
      <h2>My Expenses Template</h2>
      <NewExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={changedExpenses} monthData={monthData} />
    </AppStyle>
  );
}
