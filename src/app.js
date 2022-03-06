import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Dashboard from 'containers/dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route render={() => <div>Miss</div>} />
    </Switch>
  );
}

export default withRouter(App);
