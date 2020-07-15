import React from 'react';

import {
  Container,
  Link,
} from './styles';

const NotFound = () => (
  <Container>
    <p>A página especificada não existe ou foi removida.</p>
    <Link href="/">Voltar ao painel</Link>
  </Container>
);

export default NotFound;