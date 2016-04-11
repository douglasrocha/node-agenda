'use strict';

const expect = require('expect');
const constants = require('../../../build/js/redux/constants.js');

describe('constants', () => {
  it('should get the right add contact constant', () => {
    const addConstant = constants.addTodo;
    expect(constants.addTodo).toEqual(addConstant);
  });

  it('should get the right edit contact constant', () => {
    const editConstant = constants.editTodo;
    expect(constants.editTodo).toEqual(editConstant);
  });

  it('should get the right remove contact constant', () => {
    const removeConstant = constants.removeTodo;
    expect(constants.removeTodo).toEqual(removeConstant);
  });
});
