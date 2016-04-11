'use strict';

const Redux = require('redux');
const reducer = require('./reducer.js');

const initialState = {
  contacts: []
};

const store = Redux.createStore(reducer, initialState);

module.exports = store;
