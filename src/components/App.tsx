import { Fragment } from 'react';
import { Global } from '@emotion/react';
import globalStyle from 'styles/globalStyle';
import Routes from './Routes';

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Routes />
      <Global styles={globalStyle} />
    </Fragment>
  );
};

export default App;
