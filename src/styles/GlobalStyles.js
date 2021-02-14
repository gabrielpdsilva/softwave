import { createGlobalStyle } from 'styled-components';
import COLORS from './colors'
import w95fa from './fonts/w95fa.woff';
import w95fa2 from './fonts/w95fa.woff2';

export default createGlobalStyle`

    @font-face {
        font-family: 'w95fa';
        src: local('w95fa'), local('w95fa'),
        url(${w95fa2}) format('woff2'),
        url(${w95fa}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
    html {
        min-height: 100%;
        background-color: ${COLORS.verde};
    }
    
    * {
        color: black;
        padding: 0;
        margin: 0;
        font-family: w95fa;
    }
`;
