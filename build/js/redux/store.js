'use strict';

var Redux = require('redux');
var reducer = require('./reducer.js');

var initialState = {
  contacts: []
};

var store = Redux.createStore(reducer, initialState);

module.exports = store;