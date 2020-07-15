import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  margin: 0 0 30px 0;

  p {
    margin: 0 0 30px 0;
  }

  a, button {
    padding: 10px 30px !important;
  }
`;

export const Link = styled.a`
  background-color: var(--btn-primary-normal);
  color: var(--black);
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 16px;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  text-align: center;
  outline: 0;

  &:hover {
    background-color: var(--btn-primary-hover);
  }

  &:active {
    background-color: var(--btn-primary-normal);
  }
`;

export const LinkSecondary = styled(Link)`
  background-color: var(--btn-secondary-normal);
  color: var(--black);

  &:hover {
    background-color: var(--btn-secondary-hover);
  }

  &:active {
    background-color: var(--btn-secondary-normal);
  }
`;

export const LinkDelete = styled(Link)`
  background-color: var(--btn-delete-normal);
  color: var(--white);

  &:hover {
    background-color: var(--btn-delete-hover);
  }

  &:active {
    background-color: var(--btn-delete-normal);
  }
`;