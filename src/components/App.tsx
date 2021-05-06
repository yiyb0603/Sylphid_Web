import React from 'react';
import { css, Global, SerializedStyles } from '@emotion/react';
import Routes from './Routes';

const App = (): JSX.Element => {
  return (
    <>
      <Routes />
      <Global styles={globalStyle} />
    </>
  );
};

const globalStyle: SerializedStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default App;
