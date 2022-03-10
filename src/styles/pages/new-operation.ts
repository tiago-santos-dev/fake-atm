import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-content: space-between;
  justify-items: center;
  grid-template-rows: 7rem 2fr 5rem;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
