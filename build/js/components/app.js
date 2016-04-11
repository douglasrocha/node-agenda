const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const AppBar = require('material-ui/lib/app-bar').default;
const InsertPanel = require('./insertpanel.js');
const ContactTable = require('./contacttable.js');
const store = require('../redux/store.js');

const App = React.createClass({
  displayName: 'App',
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(AppBar, { title: 'My Agenda' }),
      React.createElement(InsertPanel, null),
      React.createElement(ContactTable, { data: this.props.data })
    );
  }
});

ReactDOM.render(React.createElement(App, { data: store.getState() }), document.getElementById('content'));