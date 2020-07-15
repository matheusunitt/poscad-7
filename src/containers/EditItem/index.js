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
      referenceId: '',
    }
  }

  componentDidMount = () => {
    //const id = this.props.match.params.id;
    //this.getItemsFromStorage(id);
  }

  getItemsFromStorage = (id) => {
    const { produtos } = this.state;

    // Pega o objeto que possuir o id especificado
    const index = produtos.findIndex(item => item.id == id);

    let lista = [];

    const storage = JSON.parse(localStorage.getItem(`produto_${index}`));

    for (let value of Object.values(storage)) {
      lista.push(value);
    }

    this.setState({
      name: lista[0],
      inStock: lista[1],
      description: lista[2],
      price: lista[3],
      imageUrl: lista[4],
      referenceId: id,
    });
  }

  handleFormSend = (e) => {
    const { name, inStock, description, price, imageUrl, referenceId } = this.state;

    e.preventDefault();

    if (name === '' || inStock === '' || description === '' || price === '' || imageUrl === '') {
      alert('Campos vazios detectados! Preencha-os antes de enviar.');
      return;
    }

    const items = [name, inStock, description, price, imageUrl]

    localStorage.setItem(`produto_${referenceId}`, JSON.stringify(items));
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
          <LinkSecondary href="/">
            <i class="fa fa-ban" aria-hidden="true"></i> Cancelar
          </LinkSecondary>
          <Link onClick={this.handleFormSend}>
            <i class="fa fa-check" aria-hidden="true"></i> Salvar alterações
          </Link>
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