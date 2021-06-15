import { createGlobalStyle } from 'styled-components';
// normalize
import { normalize } from './utils/constants/normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize}; 

   *, *::after, *::before { 
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-family: sans-serif;
   }
`;
export default GlobalStyles;
