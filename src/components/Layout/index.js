import React from 'react';

import {
  Container,
  Wrapper
} from './styles';

import NavBar from '../NavBar';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <Container>
    <NavBar />
    <Header title="Gerenciador da loja" />
    <Wrapper>
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  </Container>
);

export default Layout;