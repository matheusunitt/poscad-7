import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  margin: 0 0 30px 0;

  a, button {
    padding: 10px 30px !important;
  }
`;

export const Form = styled.form`
  border: 1px solid var(--border);
  padding: 30px;

  p {
    margin: 0 0 30px 0;
  }

  input[type=text], input[type=number], textarea {
    padding: 10px 20px;
    border: 1px solid var(--border);
    display: block;
    margin: 10px 0;
    width: 100%;
    outline: 0;
    resize: vertical;
  }

  textarea {
    min-height: 150px;
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
  background-color: var(--btn - delete -normal);
  color: var(--white);

  &:hover {
    background-color: var(--btn - delete -hover);
  }

  &:active {
    background-color: var(--btn - delete -normal);
  }
`;