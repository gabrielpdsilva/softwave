import { createGlobalStyle } from 'styled-components';

import w95fa from './w95fa.woff';
import w95fa2 from './w95fa.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'w95fa';
        src: local('w95fa'), local('w95fa'),
        url(${w95fa2}) format('woff2'),
        url(${w95fa}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;