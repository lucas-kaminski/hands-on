const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');

const urlToken = 'https://api.telegram.org/bot' + process.env.TOKEN + '/'

/*
* Send a message to a chat
* @param {string} chatId - The chat id of the chat to send the message to
* @param {string} message - The message to be sent
*/
module.exports.sendMessage = (chatId, message) => {
  axios.post(urlToken + 'sendMessage', {
    chat_id: chatId,
    text: message
  })
}

/*
* Send a photo to a chat
* @param {string} chatId - The chat id of the chat to send the photo to
* @param {string} photo - The photo to be sent, if it is a file path, it will be used form-data to send the photo, if is a url, it will be used as the photo url
* @param {string} caption - The caption of the photo
* @param {boolean} isFormData - If the photo is a formData type (default: false)
*/
module.exports.sendPhoto = (chatId, photo, caption, isFormData = false) => {
  if (isFormData) {
    const formData = new FormData()
    formData.append('chat_id', chatId)
    formData.append('photo', fs.createReadStream(photo))
    formData.append('caption', caption)
  }

  axios.post(urlToken + 'sendPhoto', isFormData ? formData : {
    chat_id: chatId,
    photo: photo,
    caption: caption
  }, isFormData && { headers: formData.getHeaders() } || {})
}

/*
* Send a contact to a chat
* @param {string} chatId - The chat id of the chat to send the contact to
* @param {string} phoneNumber - The phone number of the contact
* @param {string} firstName - The first name of the contact
* @param {string} lastName - The last name of the contact
*/
module.exports.sendContact = (chatId, phoneNumber, firstName, lastName) => {
  axios.post(urlToken + 'sendContact', {
    chat_id: chatId,
    phone_number: phoneNumber,
    first_name: firstName,
    last_name: lastName
  })
}

/*
* Send a location to a chat
* @param {string} chatId - The chat id of the chat to send the location to
* @param {string} latitude - The latitude of the location
* @param {string} longitude - The longitude of the location
*/
module.exports.sendLocation = (chatId, latitude, longitude) => {
  axios.post(urlToken + 'sendLocation', {
    chat_id: chatId,
    latitude: latitude,
    longitude: longitude
  })
}

/*
* Send a venue to a chat
* @param {string} chatId - The chat id of the chat to send the venue to
* @param {string} latitude - The latitude of the venue
* @param {string} longitude - The longitude of the venue
* @param {string} title - The title of the venue
* @param {string} address - The address of the venue
*/
module.exports.sendVenue = (chatId, latitude, longitude, title, address) => {
  axios.post(urlToken + 'sendVenue', {
    chat_id: chatId,
    latitude: latitude,
    longitude: longitude,
    title: title,
    address: address
  })
}