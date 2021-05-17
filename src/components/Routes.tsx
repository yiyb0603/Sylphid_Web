import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'pages';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Pages.HomePage}
      />

      <Route
        exact
        path='/translate'
        component={Pages.TranslatePage}
      />

      <Route
        exact
        path='/short-url'
        component={Pages.ShortURLPage}
      />

      <Route
        exact
        path='/search'
        component={Pages.SelectTypePage}
      />

      <Route
        exact
        path='/search/:type'
        component={Pages.SearchPage}
      />

      <Route
        exact
        path='/not-found'
        component={Pages.NotFoundPage}
      />

      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;