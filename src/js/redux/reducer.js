'use strict';

const constants = require('./constants.js');
const actions = require('./actions.js');

const reducer = (state, action) => {
  switch(action.type) {
    case constants.addContact:
      return state;

    case constants.editContact:
      return state;

    case constants.removeContact:
      return state;

    default:
      return state;
  }
};

module.exports = reducer;
