import { ReactNode, memo } from 'react';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { palette } from 'styles/palette';

type ButtonProps = {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  children: ReactNode;
  onClick: () => void | Promise<void>;
}

const Button = ({
  width = 'auto',
  height = 'auto',
  color = palette.white,
  backgroundColor = palette.main,
  padding = '0, 0, 0, 0',
  margin = '0, 0, 0, 0',
  fontSize = '14px',
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button css={
      buttonCSS({
        width,
        height,
        color,
        backgroundColor,
        padding,
        margin,
        fontSize,
      })}
      onClick={onClick}
    >{children}</button>
  );
};

type ButtonCSSProps = {
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
  padding: string;
  margin: string;
  fontSize: string;
}

const buttonCSS = ({
  width,
  height,
  color,
  backgroundColor,
  padding,
  margin,
  fontSize,
}: ButtonCSSProps): SerializedStyles => css`
  width: ${width};
  height: ${height};
  color: ${color};
  background-color: ${backgroundColor};
  padding: ${padding};
  margin: ${margin};
  font-size: ${fontSize};
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  & > * {
    vertical-align: middle;
  }
`;

export default memo(Button);