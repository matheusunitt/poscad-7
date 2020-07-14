import React from 'react';

import { Container } from './styles';

const Header = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

export default Header;