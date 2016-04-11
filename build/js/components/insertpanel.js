const React = require('react');
const ReactDOM = require('react-dom');
const TextField = require('material-ui/lib/text-field').default;
const RaisedButton = require('material-ui/lib/raised-button').default;

const InsertPanel = React.createClass({
  displayName: 'InsertPanel',
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(TextField, { hintText: 'Name', className: 'field-margin' }),
      React.createElement(TextField, { hintText: 'Phone', className: 'field-margin' }),
      React.createElement(RaisedButton, { label: 'Add', primary: true })
    );
  }
});

module.exports = InsertPanel;