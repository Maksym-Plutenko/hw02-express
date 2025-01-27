const Contact = require("../models/schemas/contact");

const listContacts = async (id) => {
  return Contact.find({owner: id});
};

const getContactById = async (contactId) => {
  return Contact.findById(contactId);
};

const removeContact = async (contactId) => {
  const id = String(contactId);
  return Contact.findByIdAndDelete(id);
};

const addContact = async (body) => {
  return Contact.create(body);
};

const updateContact = async (contactId, body) => {
  const id = String(contactId);
  return Contact.findByIdAndUpdate(id, body, { new: true });
};

const updateContactFavorite = async (contactId, favorite) => {
  const id = String(contactId);
  return Contact.findByIdAndUpdate(id, { favorite }, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateContactFavorite,
};
