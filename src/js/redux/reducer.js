'use strict';

const constants = require('./constants.js');
const actions = require('./actions.js');

const reducer = (state, action) => {
  switch(action.type) {
    case constants.addContact:
    return Object.assign({}, state, {
      contacts: [
        ...state.contacts,
        {
          id: state.contacts.length,
          name: action.contact.name,
          phone: action.contact.phone
        }
      ]
    });

    case constants.editContact:
      return Object.assign({}, state, {
        contacts: [
          ...state.contacts.slice(0, action.contact.id),
          {
            id: action.contact.id,
            name: action.contact.name,
            phone: action.contact.phone
          },
          ...state.contacts.slice(action.contact.id + 1)
        ]
      });

    case constants.removeContact:
      return Object.assign({}, state, {
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.id
        })
      });

    default:
      return state;
  }
};

module.exports = reducer;
