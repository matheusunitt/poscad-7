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
      price: '',
      imageUrl: '',
    }
  }

  componentDidMount = () => {
    //const id = this.props.match.params.id;
    this.getItemsFromStorage(1);
  }

  getItemsFromStorage = (id) => {
    let storageKeys = localStorage.getItem(`produto_${id}`);
    console.log(storageKeys);

    //lista.push(valor);

    /* const { name, inStock, description, price, imageUrl } = itemById;
  
    this.setState({ name });
    this.setState({ inStock });
    this.setState({ description });
    this.setState({ price });
    this.setState({ imageUrl }); */
  }

  handleFormSend = (e) => {
    const { name, inStock, description, price, imageUrl } = this.state;

    e.preventDefault();

    if (name === '' || inStock === '' || description === '' || price === '' || imageUrl === '') {
      alert('Campos vazios detectados! Preencha-os antes de enviar.');
      return;
    }

    const items = [name, inStock, description, price, imageUrl]

    const lastProductId = Object.keys(localStorage).length;

    localStorage.setItem(`produto_${lastProductId + 1}`, JSON.stringify(items));
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
            type="text"
            name="price"
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