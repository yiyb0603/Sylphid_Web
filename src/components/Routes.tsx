import { Switch, Route } from 'react-router-dom';
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
    </Switch>
  );
};

export default Routes;