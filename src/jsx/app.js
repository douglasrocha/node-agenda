const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const AppBar = require('material-ui/lib/app-bar').default;
const InsertPanel = require('./insertpanel.js');

const App = React.createClass({
  displayName: 'App',
  render: function() {
    return (
      <div>
        <AppBar title="My Agenda" />
        <InsertPanel />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
