import Button from '@components/UI/Button';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-content: space-between;
  justify-items: center;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SignInButton = styled(Button)`
  width: 15rem;
  margin-top: 2rem;
  background-color: ${props => props.theme.colors.secoundary};
`;
