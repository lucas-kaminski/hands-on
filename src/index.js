const { Client, LocalAuth, GroupChat } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const db = require("./db");

// create a function to format the phone number to 5541998119091 format
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return match[1] + match[2] + match[3] + match[4];
  } else {
    if (cleaned.length == 11) {
      return "55" + cleaned;
    }
    if (cleaned.length == 10) {
      return "55" + cleaned;
    }
  }
}

function saveWhatsappIdFromClient(client, user, formatted_phone) {
  client
    .getNumberId(formatted_phone)
    .then((chat) => {
      db.saveWhatsappId(user.ID, chat._serialized);
    })
    .catch((err) => {
      console.log("Error getting chat for ", user.PHONE, formatted_phone);
    });
}

function processUsersPhone(users, client) {
  for (let user of users) {
    if (user.PHONE) {
      const formatted_phone = formatPhoneNumber(user.PHONE);
      if (formatted_phone) {
        saveWhatsappIdFromClient(client, user, formatted_phone);
      }
    } else {
      console.log("User without phone", user.ID);
    }
  }
}
(async () => {
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      // args: ["--no-sandbox"],
    },
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Connected to WhatsApp!");

    client.on("message_create", (message) => {
      if (message.body === "!ping") {
        message.reply("pong");
      }

      if (message.body.startsWith("!sync")) {
        const message_splitted = message.body.split(" ");
        if (message_splitted.length == 0) {
          const available_commands_array = [
            "!sync whatsapp_id",
            "!sync adm_whatsapp_id",
            "!sync add_channel",
            "!sync add_member",
          ];
          message.reply(
            "Available commands:\n" + available_commands_array.join("\n")
          );
        } else {
          const sync_code = message_splitted[1];
          if (sync_code == "whatsapp_id") {
            db.selectAllFraternityUsers().then((users) => {
              processUsersPhone(users, client);
            });
          } else if (sync_code == "adm_whatsapp_id") {
            db.selectAllAdmUsers().then((users) => {
              processUsersPhone(users, client);
            });
          } else if (sync_code == "add_channel") {
            const channel_id = message.to;
            const channel_name = message_splitted.slice(2).join(" ");
            db.createChannel(channel_id, channel_name);
          } else if (sync_code == "add_member") {
            console.log("Syncing add_member");
            let user_id = message_splitted[2];
            db.getUser(user_id).then((user) => {
              user_id = user[0].WHATSAPP_ID;
            });

            let channel_id = 27;
            db.getChannel(channel_id).then((channel) => {
              channel_id = channel[0].WHATSAPP_ID;
              console.log("Channel id", channel_id);
              console.log("User id", user_id);
              client.getChatById(user_id).then((chat) => {
                chat.sendMessage("Teste");
              });
              // client.getChatById(channel_id).then((chat) => {
              //   chat
              //     .addParticipants([user_id])
              //     .then((result) => {
              //       console.log("Result", result);
              //     })
              //     .catch((err) => {
              //       console.log("Error", err);
              //     });
              // });
            });
          } else if (sync_code == "call_list_to_channel") {
            const valid_emails = [
              "domingosmantelli@gmail.com",
              "nogueiraabreu@uol.com.br",
              "henridiskin@gmail.com",
              "sergiooliveirachaveiro@gmail.com",
              "marcosdeg@hotmail.com",
              "rudoliveiraoficial@gmail.com",
              "bruvelloso@gmail.com",
              "rafaelfaguilar@hotmail.com",
              "ipmachado@hotmail.com",
              "richard.santos389@gmail.com",
              "lucas.kssilveira@gmail.com",
            ];
            for (let email of valid_emails) {
              db.getUserByEmail(email).then((user) => {
                console.log(user);
                console.log(user.WHATSAPP_ID);
                console.log("email", email);
                client
                  .getChatById(user.WHATSAPP_ID)
                  .then((chat) => {
                    const message = `Falaaaa ${user.FIRST_NAME}! \n\nSeja muitoooo bem vindo ao nosso grupo da fraternidade exclusivo no whatsapp! \n\nSegue o link para entrar no grupo: \nhttps://chat.whatsapp.com/L8KWyS9V18OEYdkFhMBE78`;
                    chat
                      .sendMessage(message)
                      .then((result) => {
                        console.log("Result", result);
                      })
                      .catch((err) => {
                        console.log("Error", err);
                      });
                  })
                  .catch((err) => {
                    console.log("Error on get chat", err);
                  });
              });
            }
          }
        }
      }
    });
  });
  client.initialize();
})();
