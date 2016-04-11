const React = require('react');
const ReactDOM = require('react-dom');
const TableRowColumn = require('material-ui/lib/table/table-row-column').default;
const TableRow = require('material-ui/lib/table/table-row').default;

const ContactTableRow = React.createClass({
  displayName: 'ContactTableRow',
  render: function() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.phone}</TableRowColumn>
      </TableRow>
    );
  }
});

module.exports = ContactTableRow;
