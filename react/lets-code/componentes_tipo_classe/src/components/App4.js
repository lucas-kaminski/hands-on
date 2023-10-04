import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }
  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({ nome: this.state.txtNome });
  }
  render() {
    const renderForm = () => {
      return (
        <>
          <br /><br /><br /><br /><br /><br />
          Nome: <input type='text' onChange={this.changeTxtNome} />
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      )
    };

    const renderText = () => (<p> <br /><br /><br /><br /><br /><br />Olá {this.state.nome}</p>);

    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App4;