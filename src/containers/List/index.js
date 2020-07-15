import React, { Component } from 'react';

import {
  MainHeader,
  ItemList,
  Item,
  ItemBody,
  ItemFooter,
  Link,
  LinkDelete,
} from './styles';

import undefinedImage from '../../assets/undefined.png';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: [],
    }
  }

  componentDidMount = () => {
    this.getItemsFromStorage();
  }

  getItemsFromStorage = () => {
    let lista = [];
    let storage = localStorage;

    for (let values of Object.values(storage)) {
      lista.push(JSON.parse(values));
    }

    this.setState({ produtos: lista });
  }

  handleRemoveButton = (e) => {
    const { produtos } = this.state;

    const referenceId = parseInt(e.target.dataset.ref);

    // Pega o objeto que possuir o id especificado
    const index = produtos.findIndex(item => item.id == referenceId);

    // Remove o item a partir de seu index e limpa o local storage
    produtos.splice(index, 1);
    localStorage.clear();

    // Para cada produto no state, adicione-o no local storage
    produtos.map((produto, index) => {
      localStorage.setItem(`produto_${index}`, JSON.stringify(produto));
    });

    this.getItemsFromStorage();
  }

  render() {
    const { produtos } = this.state;
    return (
      <>
        <MainHeader>
          <Link href="/novo">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Adicionar novo item
          </Link>
        </MainHeader>

        <ItemList>
          {produtos.map(produto => (
            <Item className="item" key={produto.id}>
              <ItemBody>
                <img src={produto.image === '' ? undefinedImage : produto.image} alt="" />
              </ItemBody>
              <ItemFooter>
                <p>{produto.name}</p>
                <Link href={`/editar/${produto.id}`}>
                  Editar
                </Link>
                <LinkDelete data-ref={produto.id} onClick={this.handleRemoveButton}>
                  Remover
                </LinkDelete>
              </ItemFooter>
            </Item>
          ))}
        </ItemList>
      </>
    );
  }
}

export default List;