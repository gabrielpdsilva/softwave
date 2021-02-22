import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Window = styled.div`
    width: 70%;
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
    border-style: solid;
    border-width: 1px;
    border-color: ${COLORS.preto} ${COLORS.branco} ${COLORS.branco} ${COLORS.preto};
    background-color: ${COLORS.branco};
    margin: 10px;
`;

export const Select = styled.select`
    margin-left: 10px;
    border: solid;
    border-width: 2px;
    border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    background-color: ${COLORS.branco};
    width: 92%;

    option {
        background-color: ${COLORS.branco};
    }
`;

export const Button = styled.button`
    
    :not(:disabled):active {  
        border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    }

    :disabled {
        text-shadow: 1px 1px 0 ${COLORS.branco};
        color: ${COLORS.cinzaEscuro};
    }

    width: 20px;
    margin-left: 4px;
    background-color: ${COLORS.cinzaClaro};
    
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
`;

export const GrayDiv = styled.div`
    display: flex;
    padding-left: 10px;
    padding-top: 5px;
    p {
        margin-right: 10px;
    }
`;