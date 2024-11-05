import React, { useRef, useState } from 'react';
import InputElement from './InputElement';
import Button from './Button';
import styled from 'styled-components';
import ExpensesService from "../services/ExpenseService";

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

export default function NewExpenseForm({ onAddExpense }) {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleRef.current.value,
      amount: parseFloat(amountRef.current.value),
      date: new Date(dateRef.current.value),
    };
    const addedExpense = await ExpensesService.addExpense(expenseData);
    onAddExpense(addedExpense);

    titleRef.current.value = '';
    amountRef.current.value = '';
    dateRef.current.value = '';
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
              ref={titleRef}
            />
            <InputElement
              label="Amount"
              type="number"
              ref={amountRef}
            />
            <InputElement
              label="Date"
              type="date"
              ref={dateRef}
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
}