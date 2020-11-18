import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
