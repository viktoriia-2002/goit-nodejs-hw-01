const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getContactById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "listContacts":
      const contactsList = await contacts.listContacts();
      return console.log(contactsList);
    case "addContact":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "removeContact":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "listContacts" });
// invokeAction({
//   action: "addContact",
//   name: "Oscar",
//   email: "oscar@gmail.com",
//   phone: "(437)544-4544",
// });
invokeAction({ action: "removeContact", id: "qdggE76Jtbfd9eWJHrssH" });
