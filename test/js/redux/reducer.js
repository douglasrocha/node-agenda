'use strict';

const deepFreeze = require('deep-freeze');
const expect = require('expect');
const constants = require('../../../build/js/redux/constants.js');
const actions = require('../../../build/js/redux/actions.js');
const reducer = require('../../../build/js/redux/reducer.js');

const initialState = { contacts: [] };

const contact1 = { id: 0, name: "Alpha", phone: "111-1111" };
const contact2 = { id: 1, name: "Beta", phone: "222-2222" };
const contact3 = { id: 2, name: "Gamma", phone: "333-3333" };
const filledState = {
  contacts: [
    contact1,
    contact2,
    contact3
  ]
};

describe('reducer', () => {
  it('should add a contact to an empty list', () => {
    const stateBefore = initialState;
    const stateAfter = {
      contacts: [ contact1 ]
    };

    const newAction = actions.addContact(contact1);

    deepFreeze(stateBefore);
    expect(
      reducer(stateBefore, newAction)
    ).toEqual(stateAfter);
  });

  it('should add a contact to a list with other elements', () => {
    const stateBefore = {
      contacts: [ contact1, contact2 ]
    }
    const stateAfter = {
      contacts: [ contact1, contact2, contact3 ]
    };

    const newAction = actions.addContact(contact3);

    deepFreeze(stateBefore);
    expect(
      reducer(stateBefore, newAction)
    ).toEqual(stateAfter);
  });

  it('should edit a contact from the list', () => {
    const editedContact = {
      id: 1,
      name: "Name",
      phone: "555-5555"
    };

    const stateBefore = filledState;
    const stateAfter = {
      contacts: [ contact1, editedContact, contact3 ]
    };

    const editAction = actions.editContact(editedContact);

    deepFreeze(stateBefore);
    expect(
      reducer(stateBefore, editAction)
    ).toEqual(stateAfter);
  });

  it('should remove a contact from the list', () => {
    const removeId = 1;
    const stateBefore = filledState;
    const stateAfter = {
      contacts: [ contact1, contact3 ]
    };

    const removeAction = actions.removeContact(removeId);

    deepFreeze(stateBefore);
    expect(
      reducer(stateBefore, removeAction)
    ).toEqual(stateAfter);
  });
});
