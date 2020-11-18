import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Photos } from './Photos';

export const routes = [
    <Route key="property" path="/photos" component={Photos} />,
];

export default function Routes() {
    return (
        <>
            <p><Link to="/photos/a">go to photos a</Link></p>
            <p><Link to="/photos/b">go to photos b</Link></p>
            <Route path="/photos/a" render={() => "photos a"} />
            <Route path="/photos/b" render={() => "photos b"} />
            <Route exact path="/photos" component={Photos} />
        </>
    );
}