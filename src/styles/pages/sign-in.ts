import Button from '@components/UI/Button';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows:7rem 2fr 5rem ;
  color: ${props => props.theme.colors.primary};
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
