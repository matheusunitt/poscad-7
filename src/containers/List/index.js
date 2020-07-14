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

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 0,
          image: "https://vd4hk1r2sz24f3i40xkdrbhd-wpengine.netdna-ssl.com/wp-content/uploads/sites/24/2017/06/aquatic-icons-150px.png",
          title: "Product 1",
        },
        {
          id: 1,
          image: "https://vd4hk1r2sz24f3i40xkdrbhd-wpengine.netdna-ssl.com/wp-content/uploads/sites/24/2017/06/aquatic-icons-150px.png",
          title: "Product 2",
        }
        ,
        {
          id: 3,
          image: "https://vd4hk1r2sz24f3i40xkdrbhd-wpengine.netdna-ssl.com/wp-content/uploads/sites/24/2017/06/aquatic-icons-150px.png",
          title: "Product 3",
        }
      ]
    }
  }

  goToLinkEdit = () => {
    const history = this.props.history;
    history.push(`/editar/${this.props.id}`);
  }

  handleRemoveButton = () => {
    alert('Not implemented yet.');
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <MainHeader>
          <Link href="/novo">Adicionar novo item</Link>
        </MainHeader>

        <ItemList>
          {products.map(product => (
            <Item className="item">
              <ItemBody>
                <img src={product.image} alt="" />
              </ItemBody>
              <ItemFooter>
                <p>{product.title}</p>
                <Link href={`/editar/${product.id}`}>Editar</Link>
                <LinkDelete onClick={this.handleRemoveButton}>Remover</LinkDelete>
              </ItemFooter>
            </Item>
          ))}
        </ItemList>
      </>
    );
  }
}

export default List;