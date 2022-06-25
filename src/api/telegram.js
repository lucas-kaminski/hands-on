const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');

const urlToken = 'https://api.telegram.org/bot' + process.env.TOKEN + '/'

/*
* Send a message to a chat
* @param {string} chatId - The chat id of the chat to send the message to
* @param {string} message - The message to be sent
* @param {boolean} forceUserToReply - If the message should be answered by the user (default: false)
*/
module.exports.sendMessage = (chatId, message) => {
  axios.post(urlToken + 'sendMessage', {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown',
  })
}

/*
* Send a message with buttons to a chat, the buttons will be sent as an inline keyboard (default: false)
* @param {string} chatId - The chat id of the chat to send the message to
* @param {string} message - The message to be sent
* @param {array} buttons - The buttons to be sent (https://core.telegram.org/bots/api#inlinekeyboardmarkup)
  buttons = [
    {
      text: 'button text',
      callback_data: 'callback data',
      url: 'url'
    }
  ]
*/
module.exports.sendMessageWithButtons = (chatId, message, buttons) => {
  axios.post(urlToken + 'sendMessage', {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: buttons
    }
  }).catch(error => {
    console.error(error)
  })

}


/*
* Update a message with a new message with only text
* @param {string} chatId - The chat id of the chat to send the message to
* @param {string} messageId - The message id of the message to be updated
* @param {string} newMessage - The new message to be sent
*/
module.exports.editMessage = (chatId, messageId, message) => {
  axios.post(urlToken + 'editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text: message,
    parse_mode: 'Markdown'
  }).catch(error => {
    console.error(error)
  })
}

/*
* Update a message with a new message with buttons
* @param {string} chatId - The chat id of the chat to send the message to
* @param {string} messageId - The message id of the message to be updated
* @param {string} message - The new message to be sent
* @param {array} buttons - The buttons to be sent (https://core.telegram.org/bots/api#inlinekeyboardmarkup)
*/
module.exports.editMessageWithButtons = (chatId, messageId, message, buttons) => {
  axios.post(urlToken + 'editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text: message,
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: 'Markdown'
  }).catch(error => {
    console.error(error)
  })
}

module.exports.deleteMessage = (chatId, messageId) => {
  axios.post(urlToken + 'deleteMessage', {
    chat_id: chatId,
    message_id: messageId
  }).catch(error => {
    console.error(error)
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