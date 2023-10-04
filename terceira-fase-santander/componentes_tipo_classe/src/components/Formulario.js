import React from 'react';

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: null, linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: '' };

    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Nome: <input type='text' value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
          </label>
          <br />
          <label>
            Linguagem favorita
            <select value={this.state.linguagem} onChange={(e) => this.setState({ linguagem: e.target.value })}>
              <option value='JavaScript'>JavaScript</option>
              <option value='PHP'>PHP</option>
              <option value='Python'>Python</option>
              <option value='Ruby'>Ruby</option>
            </select>
          </label>
          <br />
          <label>
            Sou:
            <input type='radio' checked={this.state.tipo == 'programador'} onChange={(e) => this.setState({ tipo: e.target.value })} value='programador' />programador
            <input type='radio' checked={this.state.tipo == 'desenvolvedor'} onChange={(e) => this.setState({ tipo: e.target.value })} value='desenvolvedor' />desenvolvedor
          </label>
          <br />
          <label>
            <input type='checkbox' checked={this.state.dedico} onChange={(e) => this.setState({ dedico: e.target.checked })} />
            Dedico-me:
          </label>
          <br />
          <label>
            Bio:
            <textarea value={this.state.bio} onChange={(e) => this.setState({ bio: e.target.value })} />
          </label>
          <br />

          <input type='submit' value='Salvar'></input>
        </form>

      </div>
    );
  }
}
