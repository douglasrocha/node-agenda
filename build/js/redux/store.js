'use strict';

var Redux = require('redux');
var reducer = require('./reducer.js');

var initialState = {
  contacts: [{ id: 0, name: "Alice Thompson", phone: "123-4567" }, { id: 1, name: "Brandon Cooper", phone: "353-8796" }, { id: 2, name: "Carl Johnson", phone: "982-6752" }]
};

var store = Redux.createStore(reducer, initialState);

module.exports = store;