import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import { Item, ListaAninhada } from './components/ListaAninhada';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 title="Isso é um title" text='isso é um text'>
      isso é um children
    </App2>
    <App3 />
    <App4 />
    <App5 />
    <Lista />
    <ListaAninhada>
      Item 1
      <br />
      Item2
      <br />
      <Item key={999} id={999} completo={true}>teste</Item>
      <Item key={1000} id={1000} completo={false}>teste2</Item>
    </ListaAninhada>
    <Formulario />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
