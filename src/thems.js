import { css } from 'styled-components';

export const theme = {
  mobile: (literals, ...args) => css`
    @media only screen and (max-width: 480px) {
      ${css(literals, ...args)}
    }
  `,
};
