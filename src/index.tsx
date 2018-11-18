import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';
import Calculator from './containers/Calculator';

const routes = (
  <div className='banner'>
    <div className='gradient'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/calculator' component={Calculator} />
        </Switch>
      </BrowserRouter >
    </div>
  </div>
);

ReactDOM.render(routes, document.getElementById('root'));
serviceWorker.unregister();
