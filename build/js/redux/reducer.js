'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constants = require('./constants.js');
var actions = require('./actions.js');

var reducer = function reducer(state, action) {
  switch (action.type) {
    case constants.addContact:
      return Object.assign({}, state, {
        contacts: [].concat(_toConsumableArray(state.contacts), [{
          id: state.contacts.length,
          name: action.contact.name,
          phone: action.contact.phone
        }])
      });

    case constants.editContact:
      return Object.assign({}, state, {
        contacts: [].concat(_toConsumableArray(state.contacts.slice(0, action.contact.id)), [{
          id: action.contact.id,
          name: action.contact.name,
          phone: action.contact.phone
        }], _toConsumableArray(state.contacts.slice(action.contact.id + 1)))
      });

    case constants.removeContact:
      return Object.assign({}, state, {
        contacts: state.contacts.filter(function (contact) {
          return contact.id !== action.id;
        })
      });

    default:
      return state;
  }
};

module.exports = reducer;