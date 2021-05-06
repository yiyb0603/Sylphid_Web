import { css, SerializedStyles } from '@emotion/react';

const globalStyle: SerializedStyles = css`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR' !important;

    &:focus {
      outline: none;
    }
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  td {
    vertical-align: middle;
  }

  textarea {
    resize: none;
    text-decoration: none;
  }
`;

export default globalStyle;