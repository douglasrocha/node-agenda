'use strict';

var constants = require('./constants.js');
var actions = require('./actions.js');

var reducer = function reducer(state, action) {
  switch (action.type) {
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