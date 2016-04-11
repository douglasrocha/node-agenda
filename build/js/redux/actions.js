'use strict';

var constants = require('./constants.js');

var actions = {
  addContact: function addContact(contact) {
    return {
      type: constants.addContact,
      contact: contact
    };
  },

  editContact: function editContact(contact) {
    return {
      type: constants.editContact,
      contact: contact
    };
  },

  removeContact: function removeContact(id) {
    return {
      type: constants.removeContact,
      id: id
    };
  }
};

module.exports = actions;