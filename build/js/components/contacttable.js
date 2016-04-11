const React = require('react');
const ReactDOM = require('react-dom');
const Table = require('material-ui/lib/table/table').default;
const TableHeader = require('material-ui/lib/table/table-header').default;
const TableHeaderColumn = require('material-ui/lib/table/table-header-column').default;
const TableRow = require('material-ui/lib/table/table-row').default;
const TableBody = require('material-ui/lib/table/table-body').default;
const ContactTableRow = require('./contacttablerow.js');
const store = require('../redux/store.js');

const ContactTable = React.createClass({
  displayName: 'ContactTable',

  render: () => {
    var contactRows = store.getState().contacts.map(contact => {
      return React.createElement(ContactTableRow, { key: contact.id + 1,
        id: contact.id + 1,
        name: contact.name,
        phone: contact.phone });
    });

    return React.createElement(
      Table,
      null,
      React.createElement(
        TableHeader,
        null,
        React.createElement(
          TableRow,
          null,
          React.createElement(
            TableHeaderColumn,
            null,
            'Index'
          ),
          React.createElement(
            TableHeaderColumn,
            null,
            'Name'
          ),
          React.createElement(
            TableHeaderColumn,
            null,
            'Phone'
          )
        )
      ),
      React.createElement(
        TableBody,
        null,
        contactRows
      )
    );
  }
});

module.exports = ContactTable;