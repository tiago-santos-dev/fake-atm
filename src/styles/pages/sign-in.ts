import Button from '@components/UI/Button';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  color: ${props => props.theme.colors.primary};
  justify-content: space-between;
  justify-items: center;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.gray};
`;

export const SignUpButton = styled(Button)`
  width: 15rem;
  background-color: ${props => props.theme.colors.secoundary};
`;
