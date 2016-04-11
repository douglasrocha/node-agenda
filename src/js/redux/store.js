'use strict';

const Redux = require('redux');
const reducer = require('./reducer.js');

const initialState = {
  contacts: [
    { id: 0, name: "Alice Thompson", phone: "123-4567" },
    { id: 1, name: "Brandon Cooper", phone: "353-8796" },
    { id: 2, name: "Carl Johnson", phone: "982-6752" }
  ]
};

const store = Redux.createStore(reducer, initialState);

module.exports = store;
