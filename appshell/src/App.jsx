import React, { Suspense } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';
import './App.less';
import utilTwo, { utilOne } from 'favorites/Utils';
import { useTranslation } from 'react-i18next';

const FavoriteRoutes = React.lazy(() => import("favorites/FavoriteRoutes"));
const Photos = React.lazy(() => import("property/PropertyRoutes"));
const Results = React.lazy(() => import("search/SearchRoutes"));

function App() {
  const { t } = useTranslation();

  return (
        <BrowserRouter>
            <div className="appshell-container">
                <Header />
                {utilOne()}
                {utilTwo()}
                <div>
                    <p><Link to="/">go to Dashboard</Link></p>
                    <p><Link to="/cenas">go to Cenas</Link></p>
                    <p><Link to="/favorites">go to favorites MFE</Link></p>
                    <p><Link to="/search">go to search MFE</Link></p>
                    <p><Link to="/photos">go to photos MFE</Link></p>
                </div>
                <Switch>
                    <Route path="/search">
                        <Suspense fallback="loading search...">
                            <Results />
                        </Suspense>
                    </Route>
                    <Route path="/photos">
                        <Suspense fallback="loading photos...">
                            <Photos />
                        </Suspense>
                    </Route>
                    <Route path="/favorites">
                        <Suspense fallback="loading favorites...">
                            <FavoriteRoutes />
                        </Suspense>
                    </Route>
                    <Route path="/cenas">cenas</Route>
                    <Route exact path="/">{t('dashboard')}</Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

  );
}

export default App;
