const contacts = require("./db/contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts().then((contactsList) => {
        console.log(contactsList);
      });
      break;

    case "get":
      contacts.getContactById(id).then((oneContact) => {
        console.log(oneContact);
      });
      break;

    case "add":
      contacts.addContact(name, email, phone).then((newContact) => {
        console.log(newContact);
      });
      break;

    case "remove":
      contacts.removeContact(id).then((deletedContact) => {
        console.log(deletedContact);
      });
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
