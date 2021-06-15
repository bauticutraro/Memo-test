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

   :root {
      --primary: #007bff;
      --secondary: #6c757d;
      --info: #17a2b8;
      --success: #28a745;
      --danger: #dc3545;
      --warning: #ffc107;
      --dark: #343a40;
      --light: #f8f9fa;
   }

   body {
      font-family: sans-serif;
   }
`;
export default GlobalStyles;
