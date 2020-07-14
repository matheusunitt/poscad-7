import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

export const ItemList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Item = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const ItemBody = styled.div`
  height: 150px;
  width: 150px;

  & > img {
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ItemFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  height: auto;

  & > p {
    padding: 8px 0 15px 0;
    text-align: center;
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