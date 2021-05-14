import { css, SerializedStyles } from '@emotion/react';

export const ellipsisLine = (lineClamp: number): SerializedStyles => {
  return css`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -ms-word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: lineClamp;
  `;
}

export const resetInput = (): SerializedStyles => {
  return css`
    outline: none;
    border: none;
    background: none;
  `;
}