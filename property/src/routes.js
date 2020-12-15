import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Photos} from './Photos';
import {initStore} from "../../appshell/src/store";
import store from "./store";
import {Provider} from "react-redux";

export const routes = [
    <Route key="property" path="/photos" component={Photos}/>,
];

export default function Routes() {
    initStore(store, "PropertiesStore")

    return (
        <Provider store={store}>
            <p><Link to="/photos/a">go to photos a</Link></p>
            <p><Link to="/photos/b">go to photos b</Link></p>
            <Route path="/photos/a" render={() => "photos a"}/>
            <Route path="/photos/b" render={() => "photos b"}/>
            <Route exact path="/photos" component={Photos}/>
        </Provider>
    );
}
