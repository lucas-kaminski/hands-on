// Função que faz o processamento aguardar n segundos antes de continuar
module.exports.sleep = (seconds) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

