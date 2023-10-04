let moedasInserted = []

const insert = async ({ moeda }) => {
  moedasInserted.push(moeda)
}

module.exports = { insert, moedasInserted }