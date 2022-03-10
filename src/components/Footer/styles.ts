import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 5rem;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
