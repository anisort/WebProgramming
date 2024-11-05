import React, { useRef, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import Button from './Button';
import { styled } from 'styled-components';
import ExpensesService from "../services/ExpenseService";

const ItemStyle = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;

const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;
  flex: 1 1;
  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TitleH2Style = styled.h2`
  color: white;
  font-size: 1rem;
  flex: 1 1;
  margin: 0 1rem;
  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const PriceStyle = styled.div `
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

const InputStyle = styled.input `
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
`;

export default function ExpenseItem({ id, title, amount, date, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const handleDelete = async () => {
    await ExpensesService.deleteExpense(id);
    onDelete(id);
  };

  const handleUpdate = async () => {
    const updatedData = {
      title: titleRef.current.value,
      amount: parseFloat(amountRef.current.value),
      date: new Date(dateRef.current.value),
    };
    await ExpensesService.updateExpense(id, updatedData);
    onUpdate(id, updatedData.title, updatedData.amount, updatedData.date);
    setIsEditing(false);
  };

  return (
    <ItemStyle>
      <ExpenseDate date={date} />
      <DescriptionStyle>
        {isEditing ? (
          <>
            <InputStyle ref={titleRef} defaultValue={title} />
            <InputStyle ref={amountRef} defaultValue={amount} />
            <InputStyle type="date" ref={dateRef} defaultValue={date.toISOString().split('T')[0]} />
            <Button onClick={handleUpdate}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <TitleH2Style>{title}</TitleH2Style>
            <PriceStyle>${amount}</PriceStyle>
            <Button onClick={() => setIsEditing(true)}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </>
        )}
      </DescriptionStyle>
    </ItemStyle>
  );
}
