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
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR' !important;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default App;
