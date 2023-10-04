module.exports.isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// TODO
module.exports.isValidPhone = (phone) => {
  return !isNaN(phone)
}

module.exports.sleep = (seconds) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}