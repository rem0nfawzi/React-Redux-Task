import React from 'react';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/custom.css';
import Users from './components/users/users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/users' component={Users} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
