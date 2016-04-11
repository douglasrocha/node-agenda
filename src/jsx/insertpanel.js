const React = require('react');
const ReactDOM = require('react-dom');
const TextField = require('material-ui/lib/text-field').default;
const RaisedButton = require('material-ui/lib/raised-button').default;

const InsertPanel = React.createClass({
  displayName: 'InsertPanel',
  render: function() {
    return (
      <div>
        <TextField hintText="Name" className="field-margin" />
        <TextField hintText="Phone" className="field-margin" />
        <RaisedButton label="Add" primary={true} />
      </div>
    );
  }
});

module.exports = InsertPanel;
