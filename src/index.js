import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import firebase from './utils/firebase';

// redux //
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(() => {}, composeWithDevTools());

// compoenents //
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// semantic ui css //
import 'semantic-ui-css/semantic.min.css';

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.props.history.push('/');
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />

        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    );
  }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
  <Provider>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);
