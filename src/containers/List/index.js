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
    let i = 0;
    let lista = []

    let storageKeys = Object.keys(localStorage);

    for (i of storageKeys) {
      let valor = JSON.parse(localStorage.getItem(i));
      lista.push(valor);
    }

    this.setState({ produtos: lista });
  }

  handleRemoveButton = (e) => {
    let storageKeys = Object.keys(localStorage);

    const refId = parseInt(e.target.dataset.ref);
    localStorage.removeItem(`produto_${refId}`);
    this.getItemsFromStorage();
  }

  render() {
    const { produtos } = this.state;
    return (
      <>
        <MainHeader>
          <Link href="/novo">Adicionar novo item</Link>
        </MainHeader>

        <ItemList>
          {produtos.map((produto, index) => (
            <Item className="item" key={produto.id}>
              <ItemBody>
                <img src={produto.image === '' ? undefinedImage : produto.image} alt="" />
              </ItemBody>
              <ItemFooter>
                <p>{produto.name}</p>
                <Link href={`/editar/${produto.id}`}>Editar</Link>
                <LinkDelete data-ref={index} onClick={this.handleRemoveButton}>Remover</LinkDelete>
              </ItemFooter>
            </Item>
          ))}
        </ItemList>
      </>
    );
  }
}

export default List;