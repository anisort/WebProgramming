import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses';
import NewExpenseForm from './components/NewExpenseForm';
import Loader from './components/Loader';
import './scss/styles.scss';
import styled from 'styled-components';
import ExpensesService from "./services/ExpenseService";

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
  const [changedExpenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000)); 
      const expensesData = await ExpensesService.getExpenses();
      setExpenses(expensesData);
      setIsLoading(false);
    };

    fetchExpenses();
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <AppStyle>
      <h2>My Expenses Template</h2>
      <NewExpenseForm onAddExpense={addExpenseHandler} />
      {isLoading ? (
        <Loader />
      ) : (
        <Expenses items={changedExpenses} setExpenses={setExpenses} monthData={monthData} />
      )}
    </AppStyle>
  );
}
