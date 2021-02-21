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

export const Logo = styled.img`
    width: 20px;
    height: 20px;
`;

export const BlueDiv = styled.div`
    background-image: linear-gradient(to right, ${COLORS.azulEscuro}, ${COLORS.azulClaro});
    //background-color: ${COLORS.azulEscuro};
    padding: 3px;
`;

export const Title = styled.p`
    color: ${COLORS.branco};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
`;

export const DisabledButton = styled.button`

    color: ${COLORS.cinzaEscuro};
    width: 20px;
    margin-left: 4px;
    background-color: ${COLORS.cinzaClaro};
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
`;

export const Text = styled.p`
`;