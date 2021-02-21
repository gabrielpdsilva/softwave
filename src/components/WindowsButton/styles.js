import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Botao = styled.button`
    // util:
    // https://codepen.io/supember/pen/BKmgNZ
    
    width: 90px;
    height: 35px;
    margin: 4px;
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    border-width: 1px;
    background-color: ${COLORS.cinzaClaro};
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
    
    :active {
        border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    }

`;