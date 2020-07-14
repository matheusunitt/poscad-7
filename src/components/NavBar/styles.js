import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--black);
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 100px;
  position: sticky;

  & > p {
    font-size: 25px;
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
  }
`;
