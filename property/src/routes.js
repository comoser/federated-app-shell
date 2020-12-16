import React from 'react';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {Photos} from './Photos';
import store from "./store";
import {Provider} from "react-redux";
import {GlobalStore} from "redux-micro-frontend";

export const routes = [
    <Route key="property" path="/" component={Photos} />,
];

export default function Routes() {
    const {url} = useRouteMatch();

    // Register the properties store in the global store
    GlobalStore.Get().RegisterStore("PROPERTIES_STORE", store);

    return (
        <Provider store={store}>
            <p><Link to={`${url}/a`}>go to photos a</Link></p>
            <p><Link to={`${url}/b`}>go to photos b</Link></p>
            <Route path={`${url}/a`} render={() => "photos a"}/>
            <Route path={`${url}/b`} render={() => "photos b"}/>
            <Route exact path={url} component={Photos}/>
        </Provider>
    );
}
