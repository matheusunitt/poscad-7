import React, { Component } from 'react';

import {
  MainHeader,
  Form,
  Link,
  LinkSecondary,
} from './styles';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      inStock: '',
      description: '',
      price: 0,
      imageUrl: '',
    }
  }

  handleFormSend = (e) => {
    const { name, inStock, description, price, imageUrl } = this.state;

    e.preventDefault();

    if (name == '' || inStock == '' || description == '' || price == '' || imageUrl == '') {
      alert('One or more values empty.');
      return;
    }
  }

  handleInput = (e) => {
    let input = e.target.name;
    let value = e.target.value;

    this.setState({ [input]: value });
  }

  render() {
    const { name, inStock, description, price, imageUrl } = this.state;
    return (
      <>
        <MainHeader>
          <LinkSecondary href="/">Cancelar</LinkSecondary>
          <Link onClick={this.handleFormSend}>Adicionar item</Link>
        </MainHeader>

        <Form onSubmit={this.handleFormSend}>
          <p>Preencha os dados abaixo para adicionar um produto a sua loja.</p>
          <p>Todos os itens são obrigatórios.</p>
          <input
            type="text"
            name="name"
            placeholder="Nome do produto"
            onChange={this.handleInput}
            defaultValue={name}
            required />
          <input
            type="number"
            name="inStock"
            min="1"
            step="1"
            placeholder="Quantidade disponível em estoque"
            defaultValue={inStock}
            onChange={this.handleInput}
            required />
          <textarea
            name="description"
            placeholder="Descrição do produto"
            defaultValue={description}
            onChange={this.handleInput}
            required />
          <input
            type="number"
            name="price"
            min="0"
            step="any"
            placeholder="Preço (apenas números)"
            defaultValue={price}
            onChange={this.handleInput}
            required />
          <input
            type="text"
            name="imageUrl"
            placeholder="URL da imagem do produto (Ex: http://site.com.br/imagem.png)"
            defaultValue={imageUrl}
            onChange={this.handleInput}
            required />
        </Form>
      </>
    );
  }
}

export default EditItem;