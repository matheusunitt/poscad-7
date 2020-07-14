import React from 'react';

import { Link } from 'react-router-dom';

import {
  Button
} from './styles';

const NotFound = () => (
  <>
    <p>A página especificada não existe ou foi removida.</p>
    <Link to="/">
      <Button>Voltar ao painel</Button>
    </Link>
  </>
);

export default NotFound;