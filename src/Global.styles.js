import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,#root,.App,body {
      margin:0;
      padding:0;
  }

  * {
      box-sizing: border-box;
  }
`;

export default Global