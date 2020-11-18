import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Results } from './Results';

export const routes = [
    <Route key="search" path="/search" component={Results} />,
];

export default function Routes() {
    return (
        <>
            <p><Link to="/search/a">go to search a</Link></p>
            <p><Link to="/search/b">go to search b</Link></p>
            <Route path="/search/a" render={() => "search a"} />
            <Route path="/search/b" render={() => "search b"} />
            <Route exact path="/search" component={Results} />
        </>
    );
}
