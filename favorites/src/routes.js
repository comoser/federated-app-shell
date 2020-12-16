import React from 'react';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MyTrips} from './MyTrips';
import store from "./store";
import {GlobalStore} from "redux-micro-frontend";

export const routes = [
    <Route key="favorites" path="/favorites" component={MyTrips}/>,
];

/*
* The callback that will return the data from the APP_SHELL_STORE
* when it changes
const globalStoreChanged = (localState) => {
    console.log(localState)
}
*/
export default function Routes() {
    const {url} = useRouteMatch();

    // Register the favorite store in the global store
    GlobalStore.Get().RegisterStore("FAVORITES_STORE", store);

    // You can listen to changes on a store by through subscribe
    // GlobalStore.Get().Subscribe("APP_SHELL_STORE", globalStoreChanged);

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
