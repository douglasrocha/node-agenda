'use strict';

const constants = require('./constants.js');

const actions = {
  addContact: contact => {
    return {
      type: constants.addContact,
      contact
    };
  },

  editContact: contact => {
    return {
      type: constants.editContact,
      contact
    };
  },

  removeContact: id => {
    return {
      type: constants.removeContact,
      id
    };
  }
};

module.exports = actions;
