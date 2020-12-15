import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MyTrips} from './MyTrips';
import store from "./store";
import {initStore} from "../../appshell/src/store";

export const routes = [
    <Route key="favorites" path="/favorites" component={MyTrips}/>,
];

export default function Routes() {
    initStore(store, "FavoritesStore")

    return (
        <Provider store={store}>
            <p><Link to="/favorites/a">go to favorites a</Link></p>
            <p><Link to="/favorites/b">go to favorites b</Link></p>
            <Route path="/favorites/a" render={() => "favorites a"}/>
            <Route path="/favorites/b" render={() => "favorites b"}/>
            <Route exact path="/favorites" component={MyTrips}/>
        </Provider>
    );
}
