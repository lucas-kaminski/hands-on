import React from 'react';
import ReactDOM from 'react-dom';
import Efeito from './components/Efeito';
import State from './components/Estado';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Hello text='Teste' />
    <State />
    <Efeito />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();
