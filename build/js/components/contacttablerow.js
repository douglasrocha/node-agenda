const React = require('react');
const ReactDOM = require('react-dom');
const TableRowColumn = require('material-ui/lib/table/table-row-column').default;
const TableRow = require('material-ui/lib/table/table-row').default;

const ContactTableRow = React.createClass({
  displayName: 'ContactTableRow',
  render: function () {
    return React.createElement(
      TableRow,
      null,
      React.createElement(
        TableRowColumn,
        null,
        this.props.id
      ),
      React.createElement(
        TableRowColumn,
        null,
        this.props.name
      ),
      React.createElement(
        TableRowColumn,
        null,
        this.props.phone
      )
    );
  }
});

module.exports = ContactTableRow;