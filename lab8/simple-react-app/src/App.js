import React from 'react';
import Expenses from './components/Expenses';
import './scss/styles.scss';

const expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2024, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2024, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2024, 5, 12) },
];

export default function App() {
  return (
    <div>
      <h2>My Expenses tempalte</h2>
      <Expenses items={expenses} />
    </div>
  );
}
