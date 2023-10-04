import React, { useState, useEffect } from 'react';

export default function Efeito() {

  const [nome, setNome] = useState(undefined);

  useEffect(() => {
    if (nome === undefined) {
      setNome(sessionStorage.getItem('nome') || "");
    }
    else {
      sessionStorage.setItem('nome', nome);
    }
  }, [nome]);

  return (
    <>
      <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <h1>{nome}</h1>
      {/* <input type='button' onClick={() => { sessionStorage.setItem('nome', nome); setNome(undefined) }} value='Salvar' /> */}
    </>
  );
}