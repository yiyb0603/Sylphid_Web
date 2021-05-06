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
    </Switch>
  );
};

export default Routes;