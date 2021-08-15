import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const Root = () => (
  <Router>
    <Switch>
      <Route exact='/login' component={Login} />
      <Route exact='/register' component={Register} />

      <Route path='/' component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
