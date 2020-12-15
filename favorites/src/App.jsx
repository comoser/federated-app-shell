import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from "react-router-dom";
import {routes} from './routes';
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {routes}
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
