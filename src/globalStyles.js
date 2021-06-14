import { createGlobalStyle } from 'styled-components';
// normalize
import { normalize } from './utils/constants/normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize}; 
`;
export default GlobalStyles;
