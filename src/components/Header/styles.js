import styled from 'styled-components';
import COLORS from '../../styles/colors';

import { Link } from 'react-router-dom';

// util:
// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router

export const Container = styled.div`

    //width: 100%;
    //position: fixed;

    background-color: ${COLORS.cinzaClaro};
    padding: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right: 20px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;