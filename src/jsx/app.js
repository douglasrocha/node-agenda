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
  render: function() {
    return (
      <div>
        <AppBar title="My Agenda" />
        <InsertPanel />
        <ContactTable data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <App data={store.getState()} />,
  document.getElementById('content')
);
