'use strict';

const expect = require('expect');
const constants = require('../../../build/js/redux/constants.js');

describe('constants', () => {
  it('should get the add contact constant', () => {
    const addConstant = constants.addContact;
    expect(constants.addContact).toEqual(addConstant);
  });

  it('should get the edit contact constant', () => {
    const editConstant = constants.editContact;
    expect(constants.editContact).toEqual(editConstant);
  });

  it('should get the remove contact constant', () => {
    const removeConstant = constants.removeContact;
    expect(constants.removeContact).toEqual(removeConstant);
  });
});
