import ExpenseDate from './ExpenseDate';
import Card from './Card';
import {styled} from 'styled-components';


const ItemStyle = styled(Card) `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem 0;
    background-color: #4b4b4b;
`
const DescriptionStyle = styled.div `
  display: flex;
  flex-direction: row;
  grid-gap: 1rem;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1;
  }

`

const TitleH2Style = styled.h2 `
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1 1;
  margin: 0 1rem;
  color: white;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`

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
`

export default function ExpenseItem(props) {
  return (
    <ItemStyle>
      <ExpenseDate date={props.date} />
      <DescriptionStyle>
        <TitleH2Style>{props.title}</TitleH2Style>
        <PriceStyle>${props.amount}</PriceStyle>
      </DescriptionStyle>
    </ItemStyle>
  );
}
