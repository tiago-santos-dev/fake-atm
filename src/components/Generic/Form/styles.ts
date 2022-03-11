import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  width: 20vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 720px) {
    width: 50vw;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: 0;
`;

export const Label = styled.text`
  text-transform: capitalize;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;
