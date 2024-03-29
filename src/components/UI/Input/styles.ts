import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  color: ${props => props.theme.colors.gray};
  border-bottom: 2px solid ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
export const UIInput = styled(Field)`
  font-weight: 400;
  width: 100%;
  background: transparent;
  border: 0 !important;

  &::placeholder {
    text-transform: capitalize;
    color: ${props => props.theme.colors.gray};
  }
`;
