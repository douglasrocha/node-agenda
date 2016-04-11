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
      return (
        <ContactTableRow key={contact.id + 1}
                         id={contact.id + 1}
                         name={contact.name}
                         phone={contact.phone} />
      );
    });

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Index</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contactRows}
        </TableBody>
      </Table>
    );
  }
});

module.exports = ContactTable;
