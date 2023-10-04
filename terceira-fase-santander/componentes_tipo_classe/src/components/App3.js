import React from 'react';

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined }
    // this.changeNome = this.changeNome.bind(this); se n usar arrow function, tem que fazer o bind
  }
  changeNome = (evt) => {
    this.setState({ nome: evt.target.value });
  }
  render() {
    return (
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome} />
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;