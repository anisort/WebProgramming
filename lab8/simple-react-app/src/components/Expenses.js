import Card from './Card';
import ExpenseItem from './ExpenseItem';
import {styled} from 'styled-components';

const ExpenseStyle = styled(Card) `
  padding: 1rem;
  background-color: rgba(117, 118, 118, 0.46);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;

`
export default function Expenses(props) {
  return (
    <ExpenseStyle>
      {props.items.map((expense) => (
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
