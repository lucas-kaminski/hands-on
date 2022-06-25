// Validação do e-mail passado através de um método regex (https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
module.exports.isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validação do telefone passado, atualmente só checa se é um número
// TODO: implementar uma melhor validação do telefone
module.exports.isValidPhone = (phone) => {
  return !isNaN(phone)
}