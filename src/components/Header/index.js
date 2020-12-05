import styled from 'styled-components/macro';

const Container = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${props => props.theme.colors.primary};
  display: grid;
  align-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 20px; 
`;

export default function Header() {
  return (
    <Container>
      <Title>SpaceX Missions</Title>
    </Container>
  )
}