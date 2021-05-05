import React from 'react';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MyTrips} from './MyTrips';
import configureI18n from "./i18n";
import store from './store';
import './protocol';

export const routes = [
    <Route key="favorites" path="/" component={MyTrips}/>,
];

/*
* The callback that will return the data from the APP_SHELL_STORE
* when it changes
const globalStoreChanged = (localState) => {
    console.log(localState)
}
*/
export default function Routes() {
    configureI18n();

    const {url} = useRouteMatch();

    return (
        <Provider store={store}>
            <p><Link to={`${url}/a`}>go to favorites a</Link></p>
            <p><Link to={`${url}/b`}>go to favorites b</Link></p>
            <Route path={`${url}/a`} render={() => "favorites a"}/>
            <Route path={`${url}/b`} render={() => "favorites b"}/>
            <Route exact path={url} component={MyTrips}/>
        </Provider>
    );
}
