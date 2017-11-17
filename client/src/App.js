import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { AUTH_USER } from './actions/actions';

import Home from './components/Home';
import RequireAuth from './components/auth/RequireAuth';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';

let localStorage;
if (global || typeof localStorage === "undefined" || localStorage === null) {
  localStorage = require('localStorage');
}

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signout' component={Signout} />
        <Route exact path='/feature' component={RequireAuth(Feature)} />
      </Switch>
    </div>
  </Provider>
);

export default App;
