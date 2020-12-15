import React from 'react';
import { Route, Link } from 'react-router-dom';
import configureI18n from './i18n';
import { MyTrips } from './MyTrips';

export const routes = [
    <Route key="favorites" path="/" component={MyTrips} />,
];

export default function Routes() {
    configureI18n();

    return (
        <>
            <p><Link to="/favorites/a">go to favorites a</Link></p>
            <p><Link to="/favorites/b">go to favorites b</Link></p>
            <Route path="/favorites/a" render={() => "favorites a"} />
            <Route path="/favorites/b" render={() => "favorites b"} />
            <Route exact path="/favorites" component={MyTrips} />
        </>
    );
}
