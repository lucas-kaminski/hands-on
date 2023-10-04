import React from 'react';

class ListaAninhada extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, nome: 'item1', completo: false },
        { id: 2, nome: 'item2', completo: false },
        { id: 3, nome: 'item3', completo: true },
        { id: 4, nome: 'item4', completo: false },
      ]
    }
  }

  render() {
    return (
      <ul>
        {this.props.children}

        {React.Children.map(child => child.type == Item ? child : null)}

        {this.state.items.map(item => (
          <Item key={item.id} id={item.id} completo={item.completo}>
            {item.nome}
          </Item>
        ))}
      </ul>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? 'line-through' : 'none'

    return (
      <>
        'Lista aninhada'
        <li data-id={this.props.id} style={{ textDecoration }}>
          {this.props.children}
        </li>
      </>
    )
  }
}

export { ListaAninhada, Item };