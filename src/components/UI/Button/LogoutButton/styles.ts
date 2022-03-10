import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
