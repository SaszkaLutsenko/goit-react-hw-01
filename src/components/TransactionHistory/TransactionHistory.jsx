import { Title, Container, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr
              key={id}
              style={{
                backgroundColor: idx % 2 === 0 ? 'white' : 'lightgray',
              }}
            >
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
};