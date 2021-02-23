import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Window = styled.div`
    width: 30%;
    background-color: ${COLORS.cinzaClaro};
    border: solid;
    border-width: 2px;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
    
    margin: 5px;
`;

export const BlueLine = styled.div`
    background-image: linear-gradient(to right, ${COLORS.azulEscuro}, ${COLORS.azulClaro});
    //background-color: ${COLORS.azulEscuro};
    padding: 3px;
    justify-content: space-between;
    display: flex;
`;

export const Title = styled.p`
    color: ${COLORS.branco};
`;

export const WindowBody = styled.div`
    background-color: ${COLORS.cinzaClaro};
    margin: 10px;
`;

export const Button = styled.button`

    :active {
        border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    }

    width: 20px;
    margin-left: 4px;
    background-color: ${COLORS.cinzaClaro};
    box-shadow: 1px 1px;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
`;

export const Text = styled.p`
`;