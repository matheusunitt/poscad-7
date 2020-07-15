import React, { Component } from 'react';

import {
  MainHeader,
  Form,
  Link,
  LinkSecondary,
} from './styles';

import { ToastContainer, toast } from 'react-toastify';

import Layout from '../../components/Layout';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      inStock: '',
      description: '',
      price: '',
      imageUrl: '',
      product_exists: true
    }
  }

  componentDidMount = () => {
    this.getItemsFromStorage(this.props.match.params.id);
  }

  getItemsFromStorage = (id) => {
    let serializedId = id.toString();

    let lista = [];
    let storage = localStorage;

    for (let values of Object.values(storage)) {
      lista.push(JSON.parse(values));
    }

    let index = lista.findIndex(item => item.id == serializedId);

    if (index != -1) {
      this.setState({ product_exists: true });
      lista = lista.splice(index, 1);

      this.setState({
        name: lista[0].name,
        inStock: lista[0].inStock,
        description: lista[0].description,
        price: lista[0].price,
        imageUrl: lista[0].imageUrl,
      });

      return;
    }

    this.setState({ product_exists: false });
    toast.error('O produto especificado não existe!');
  }

  handleFormSend = (e) => {
    const { name, inStock, description, price, imageUrl, referenceId } = this.state;

    e.preventDefault();

    if (name === '' || inStock === '' || description === '' || price === '' || imageUrl === '') {
      toast.error('Alguns campos estão vazios.');
      return;
    }

    const items = [name, inStock, description, price, imageUrl]

    localStorage.setItem(`produto_${referenceId}`, JSON.stringify(items));

    toast.success('Os dados foram salvos com sucesso!');
  }

  handleInput = (e) => {
    let input = e.target.name;
    let value = e.target.value;

    this.setState({ [input]: value });
  }

  render() {
    const { name, inStock, description, price, imageUrl, product_exists } = this.state;
    return (
      <Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {product_exists ? (
          <>
            <MainHeader>
              <LinkSecondary href="/">
                <i className="fa fa-ban" aria-hidden="true"></i> Cancelar
              </LinkSecondary>
              <Link onClick={this.handleFormSend}>
                <i className="fa fa-check" aria-hidden="true"></i> Salvar alterações
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
          </>) : (<Link href="/">Voltar ao painel</Link>)}
      </Layout>
    );
  }
}

export default EditItem;