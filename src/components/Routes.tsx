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
    </Switch>
  );
};

export default Routes;