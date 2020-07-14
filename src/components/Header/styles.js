import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--orange);
  height: 200px;
  width: 100%;
  padding: 0 100px;

  & > h1 {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }
`;
