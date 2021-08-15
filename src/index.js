import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// compoenents //
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// semantic ui css //
import 'semantic-ui-css/semantic.min.css';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />

      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
