import React, { useState } from 'react';

const State = ({ estado, onChange }) => {
  const [nome, setNome] = useState('');

  return (
    <>
      Nome: <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <h1>O nome é {nome}</h1>
    </>
  );
}

export default State