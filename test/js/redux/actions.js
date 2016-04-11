'use strict';

const expect = require('expect');
const constants = require('../../../build/js/redux/constants.js');
const actions = require('../../../build/js/redux/actions.js');

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const contact = { name: "John", phone: "555-5555" };
    const expectedAction = {
      type: constants.addContact,
      contact
    }

    expect(actions.addContact(contact)).toEqual(expectedAction);
  });

  it('should create an action to edit a todo', () => {
    const id = 1;
    const contact = { id, name: "John", phone: "555-5555"};
    const expectedAction = {
      type: constants.editContact,
      contact
    }

    expect(actions.editContact(contact)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const id = 3;
    const expectedAction = {
      type: constants.removeContact,
      id
    }

    expect(actions.removeContact(id)).toEqual(expectedAction);
  });
});
