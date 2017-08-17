import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';

// TODO look into server rendering + history solutions

// Router is total overkill for the app at this point
// But having it ready to go will make adding new features easier.
export default (
<Router history={browserHistory}>
  <Route path="/" component={Home} />
</Router>
);
