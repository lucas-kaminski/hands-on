import React from 'react';

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }

  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if (nome) this.setState({ nome });
  }

  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({ nome: this.state.txtNome });
    sessionStorage.setItem('nome', this.state.txtNome);
  }
  render() {
    const renderForm = () => {
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtNome} />
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      )
    };

    const renderText = () => (<p>Olá {this.state.nome}</p>);

    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App5;