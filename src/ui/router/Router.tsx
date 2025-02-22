import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// History

// Views
import App from '../App';
import Library from '../views/Library/Library';
import Playlists from '../views/Playlists/Playlists';
import Settings from '../views/Settings/Settings';
import history from './history';

const AppRouter: React.FC = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path='/library' component={Library} />
        <Route path='/settings' component={Settings} />
        <Route path='/playlists/:playlistId?' component={Playlists} />
      </Switch>
    </App>
  </Router>
);

export default AppRouter;
