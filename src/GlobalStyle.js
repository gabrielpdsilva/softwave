import { createGlobalStyle } from 'styled-components'
import COLORS from './styles/colors'
/*injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`*/

export default createGlobalStyle`

  
  * {
      color: black;
      padding: 0;
      margin: 0;
      //background-color: ${COLORS.cinzaClaro};
      font-family: w95fa;
      
  }
`;