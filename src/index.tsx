import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store/store';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';
import { Calculator } from './containers/Calculator';

const routes = (
  <div className='banner'>
    <div className='gradient'>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/calculator' component={Calculator} />
          </Switch>
        </BrowserRouter >
      </Provider>
    </div>
  </div>
);

ReactDOM.render(routes, document.getElementById('root'));
serviceWorker.unregister();
