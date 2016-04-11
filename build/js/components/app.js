const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const AppBar = require('material-ui/lib/app-bar').default;
const InsertPanel = require('./insertpanel.js');

const App = React.createClass({
  displayName: 'App',
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(AppBar, { title: 'My Agenda' }),
      React.createElement(InsertPanel, null)
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));