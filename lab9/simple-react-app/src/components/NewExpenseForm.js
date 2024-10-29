import React, { useState } from 'react';
import InputElement from './InputElement';
import Button from './Button';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #A892EE;
  padding: 1rem;
  border-radius: 12px;
  width: 50rem;
  max-width: 95%;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function NewExpenseForm ( {onAddExpense} ) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: parseFloat(amount),
      date: new Date(date),
    };
    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
    //setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <FormContainer>
      {!isFormVisible && (
        <CenteredButtonContainer>
          <Button onClick={toggleFormVisibility}>Add New Expense</Button>
        </CenteredButtonContainer>
      )}
      {isFormVisible && (
        <form onSubmit={submitHandler}>
          <InputRow>
            <InputElement
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputElement
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <InputElement
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </InputRow>
          <ButtonContainer>
            <Button type="button" onClick={toggleFormVisibility}>Cancel</Button>
            <Button type="submit">Add Expense</Button>
          </ButtonContainer>
        </form>
      )}
    </FormContainer>
  );
};