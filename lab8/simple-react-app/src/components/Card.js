import {styled} from 'styled-components';

const CardStyle = styled.div `
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`

export default function Card(props) {
  return <CardStyle className={props.className}>{props.children}</CardStyle>;
}

// export default function Card(props) {
//   const classes = 'card ' + props.className;
//   return <div className={classes}>{props.children}</div>;
// }