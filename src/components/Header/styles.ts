import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 7rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
`;
