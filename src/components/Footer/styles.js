import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Container = styled.div`
    background-color: ${COLORS.cinzaClaro};
    border-width: 1px;
    border-style: solid;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Data = styled.div`
    background-color: ${COLORS.cinzaClaro};
    padding: 7px;
    border-style: solid;
    border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    border-width: 1px;
    margin-left: auto;
    margin-right: 5px;
`;