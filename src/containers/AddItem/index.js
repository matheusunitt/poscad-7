import React, { Component } from 'react';

import {
  MainHeader,
  Form,
  Link,
  LinkSecondary,
} from './styles';

import { ToastContainer, toast } from 'react-toastify';

import Layout from '../../components/Layout';

class AddItem extends Component {
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

  goToPanel = () => {
    const { history } = this.props;
    history.push('/');
  }

  handleFormSend = (e) => {
    const { name, inStock, description, price, imageUrl } = this.state;

    e.preventDefault();

    if (name === '' || inStock === '' || description === '' || price === '' || imageUrl === '') {
      toast.error('Alguns campos estão vazios.');
      return;
    }

    let id = Math.floor(100000 + Math.random() * 900000);

    const items = { name, inStock, description, price, imageUrl, id }
    const lastProductId = Object.keys(localStorage).length;

    localStorage.setItem(`produto_${lastProductId}`, JSON.stringify(items));

    toast.success('Os dados foram criados com sucesso!');
  }

  handleInput = (e) => {
    let input = e.target.name;
    let value = e.target.value;

    this.setState({ [input]: value });
  }

  render() {
    const { name, inStock, description, price, imageUrl } = this.state;
    return (
      <Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <MainHeader>
          <LinkSecondary href="/">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Voltar
          </LinkSecondary>
          <Link onClick={this.handleFormSend}>
            <i className="fa fa-check" aria-hidden="true"></i> Adicionar item
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
      </Layout>
    );
  }
}

export default AddItem;